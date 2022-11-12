import { Component, Input, OnInit } from '@angular/core';
import { ChallengeOption } from 'src/models/challengeOption';

@Component({
  selector: 'challenge-option-list',
  templateUrl: './challenge-option-list.component.html',
  styleUrls: ['./challenge-option-list.component.scss']
})
export class ChallengeOptionListComponent implements OnInit {

  @Input() challengeId:string ='';
  @Input() challengeOptionList:ChallengeOption[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
