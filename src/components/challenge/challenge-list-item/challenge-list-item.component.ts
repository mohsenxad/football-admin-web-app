import { Component, Input, OnInit } from '@angular/core';
import { Challenge } from 'src/models/challenge';
import { ChallengeService } from 'src/services/challenge/challenge.service';

@Component(
	{
		selector: 'challenge-list-item',
		templateUrl: './challenge-list-item.component.html',
		styleUrls: ['./challenge-list-item.component.scss']
	}
)
export class ChallengeListItemComponent implements OnInit {

	@Input() challenge: Challenge ={};
	constructor
	(
		private challengeService:ChallengeService
	) { }

	ngOnInit(): void {
	}

	postOnChannel():void{
		this.challengeService.postOnChannel(
			this.challenge._id.toString() as string || "none"
		).subscribe(
			(data: any) => 
				{
					console.log(data);
					
				}
		);
			
	}

	delete():void
	{
		this.challengeService.delete(this.challenge._id)
		.subscribe(
			(data:any) => 
				{
					console.log(data);
					
				}
		)
	}

}
