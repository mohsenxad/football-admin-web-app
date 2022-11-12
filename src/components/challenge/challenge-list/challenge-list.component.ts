import { Component, Input, OnInit } from '@angular/core';
import { Challenge } from 'src/models/challenge';

@Component({
  selector: 'challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.scss']
})
export class ChallengeListComponent implements OnInit {

	@Input() challengeList: Challenge[] =[];
	constructor() { }

	ngOnInit(): void {
	}

}
