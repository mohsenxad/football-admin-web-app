import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Challenge } from 'src/models/challenge';
import { ChallengeService } from 'src/services/challenge/challenge.service';

@Component({
  selector: 'challenge-panel',
  templateUrl: './challenge-panel.component.html',
  styleUrls: ['./challenge-panel.component.scss']
})
export class ChallengePanelComponent implements OnInit {


	challengeList: Challenge[] = [];

	constructor(
		private route: ActivatedRoute,
		private challengeService: ChallengeService
	) { }

	getAllChallengeByEventId
	(
		eventId: string
	)
		{
			this.challengeService
				.getAllByEventId(eventId)
				.subscribe(
					(data:any) => 
						{
							
							this.challengeList = data.challengeList;
							console.log(this.challengeList);
						}
				)
		}

  ngOnInit(): void {
    this.route.params
			.subscribe(params => 
				{
					let eventId: string = params['eventId']; 
          			this.getAllChallengeByEventId(eventId);
          
				}
			);
  }

}
