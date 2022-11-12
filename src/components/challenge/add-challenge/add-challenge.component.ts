import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatetimeHelperService } from 'src/helper/dateTime/datetime-helper.service';
import { Challenge } from 'src/models/challenge';
import { ChallengeService } from 'src/services/challenge/challenge.service';

@Component(
	{
		selector: 'add-challenge',
		templateUrl: './add-challenge.component.html',
		styleUrls: ['./add-challenge.component.scss']
	}
)
export class AddChallengeComponent implements OnInit 
	{

		eventId: string ='';
		localStartDateTime: string = '';
		localEndDateTime: string = '';
		optionListString: string = '';
		challenge:Challenge = {};

		constructor(
			private route: ActivatedRoute,
			private dateTimeHelper:DatetimeHelperService,
			private challengeService:ChallengeService
		) { }

		ngOnInit(): void 
			{
				this.route.params
				.subscribe(params => 
					{
						let eventId: string = params['eventId']; 
						if(eventId)
							{
								this.eventId = eventId;
								this.challenge.event = eventId;
							}

					}
				);
			}

		getOptionList():any{
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

		saveChallenge():void
			{
				this.challenge.optionList = this.getOptionList();
				this.challenge.startDateTime = this.dateTimeHelper.convertLocalDateTimeToDateTimeInteger(
					this.localStartDateTime
				);
				this.challenge.endDateTime = this.dateTimeHelper.convertLocalDateTimeToDateTimeInteger(
					this.localEndDateTime
				)
				this.challengeService.add(
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
