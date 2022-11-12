import { Component, Input, OnInit } from '@angular/core';
import { ChallengeOption } from 'src/models/challengeOption';
import { ChallengeService } from 'src/services/challenge/challenge.service';

@Component({
  selector: 'challenge-option-list-item',
  templateUrl: './challenge-option-list-item.component.html',
  styleUrls: ['./challenge-option-list-item.component.scss']
})
export class ChallengeOptionListItemComponent implements OnInit {

	@Input() challengeId:string ='';
	@Input() challengeOption:ChallengeOption={};
	constructor(
		private challengeService:ChallengeService
	) { }

	ngOnInit(): void 
	{
	}

	setAsResult():void
		{
			this.challengeService.setResultOption(
				this.challengeId,
				this.challengeOption._id
			).
			subscribe(
				(data:any)=>
					{
						console.log(data);
					}
			)
		}

}
