import { Component, OnInit } from '@angular/core';
import { Event } from 'src/models/event';
import { EventService } from 'src/services/event/event.service';

@Component({
  selector: 'event-panel',
  templateUrl: './event-panel.component.html',
  styleUrls: ['./event-panel.component.scss']
})
export class EventPanelComponent implements OnInit {

  eventList:Event[] =[];
  constructor(
    private eventService: EventService
  ) { }

  getAllEvents(){
    this.eventService.getAll()
    .subscribe((data:any) => {
      
      this.eventList = data.eventList;
      console.log(this.eventList);
    })
  }
  ngOnInit(): void {
    this.getAllEvents();
  }

}
