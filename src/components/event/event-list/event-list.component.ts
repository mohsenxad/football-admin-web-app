import { Component, Input, OnInit } from '@angular/core';
import { Event } from 'src/models/event';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  @Input() eventList:Event[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
