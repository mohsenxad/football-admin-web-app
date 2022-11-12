import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatetimeHelperService } from 'src/helper/dateTime/datetime-helper.service';
import { Challenge } from 'src/models/challenge';
import { ChallengeService } from 'src/services/challenge/challenge.service';

@Component({
  selector: 'edit-challenge',
  templateUrl: './edit-challenge.component.html',
  styleUrls: ['./edit-challenge.component.scss']
})
export class EditChallengeComponent implements OnInit {

	eventId: string ='';
	challengeId: string ='';
	localStartDateTime: string = '';
	localEndDateTime: string = '';
	optionListString: string = '';
	challenge:Challenge = {};

	constructor(
		private route: ActivatedRoute,
		private datetimeHelperService:DatetimeHelperService,
		private challengeService:ChallengeService
	) { }

	ngOnInit(): void
		{
			this.route.params
				.subscribe(params => 
					{
						let eventId: string = params['eventId']; 
						let challengeId: string = params['challengeId'];
						if(
							eventId &&
							challengeId
						)
							{
								this.eventId = eventId;
								this.challengeId = challengeId;
								this.getChallenge(challengeId);
							}

					}
				);		
		}

	getChallenge(
		challengeId: string
	):void
		{
			this.challengeService.get(
				challengeId
			).subscribe(
				(data:any) => {
					this.challengeId = data.challenge._id;
					this.localStartDateTime = this.datetimeHelperService.convertDateTimeStringToLocalDateTimeString(
						data.challenge.startDateTime
					)
					this.localEndDateTime = this.datetimeHelperService.convertDateTimeStringToLocalDateTimeString(
						data.challenge.endDateTime
					)

					
					
					this.challenge = data.challenge;
					this.optionListString = data.challenge.optionList.map(
						(option:any) => 
							{
								return option.title
							}
					).join(',')
				}
			)

		}
	
	getOptionList():any
		{
			let optionTitleList = this.optionListString.split(',');
			let result = optionTitleList.map(
				(optionTitle) =>
					{
						return {
							title: optionTitle
						}
					}
			)
			return result;
		}

	updateChallenge():void
		{
			//this.challenge.optionList = this.getOptionList();
			this.challenge.startDateTime = this.datetimeHelperService.convertLocalDateTimeToDateTimeInteger(
				this.localStartDateTime
			);
			this.challenge.endDateTime = this.datetimeHelperService.convertLocalDateTimeToDateTimeInteger(
				this.localEndDateTime
			)

			this.challenge.registerDate = this.datetimeHelperService.convertLocalDateTimeToDateTimeInteger(
				this.challenge.registerDate.toString()
			)

			this.challenge.optionList = 
			this.challengeService.update(
				this.challengeId,
				this.challenge
			)
			.subscribe(
				(data :any) =>
					{
						console.log(data);
					}
			)
		}

}
