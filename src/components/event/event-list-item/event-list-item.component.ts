import { Component, Input, OnInit } from '@angular/core';
import { DatetimeHelperService } from 'src/helper/dateTime/datetime-helper.service';
import { Event } from 'src/models/event';
import { EventService } from 'src/services/event/event.service';

@Component(
	{
		selector: 'event-list-item',
		templateUrl: './event-list-item.component.html',
		styleUrls: ['./event-list-item.component.scss']
	}
)

export class EventListItemComponent implements OnInit {

	@Input() event:Event ={};
	constructor(
		private eventService: EventService,
		private datetimeHelperService:DatetimeHelperService
	) { }

	ngOnInit(): void {
	}

	convertToLocalDateTime(
		dateTimeString: number 
	):string
		{
			return this.datetimeHelperService.convertDateTimeToLocalDateTimeString(
				dateTimeString
			)
		}

	delete():void
	{
		this.eventService.delete(this.event._id)
		.subscribe(
			(data:any) => 
				{
					console.log(data);
					
				}
		)
	}

	postOnChannel():void{
		this.eventService.postOnChannel(
			this.event._id
		).subscribe(
			(data: any) => 
				{
					console.log(data);
					
				}
		);
			
		
	}

}
