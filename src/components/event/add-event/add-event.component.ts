import { Component, OnInit } from '@angular/core';
import { DatetimeHelperService } from 'src/helper/dateTime/datetime-helper.service';
import { Event } from 'src/models/event';
import { EventService } from 'src/services/event/event.service';

@Component(
	{
		selector: 'add-event',
		templateUrl: './add-event.component.html',
		styleUrls: ['./add-event.component.scss']
	}
)

export class AddEventComponent implements OnInit 
	{

		event:Event = {};
		tagListString: string = '';
		localStartDateTime: string = '';
		localEndDateTime: string = '';

		constructor(
			private eventService:EventService,
			private dateTimeHelper:DatetimeHelperService
		){}

		getTagList():string[]{
			let result = this.tagListString.split(',');
			return result;
		}

		ngOnInit(): void
			{
			}
		
		
		

		saveEvent():void
			{
				this.event.tagList = this.getTagList();
				this.event.startDateTime = this.dateTimeHelper.convertLocalDateTimeToDateTimeInteger(
					this.localStartDateTime
				);
				this.event.endDateTime = this.dateTimeHelper.convertLocalDateTimeToDateTimeInteger(
					this.localEndDateTime
				)
				this.eventService.add(
					this.event
				)
				.subscribe(
					(data :any) =>
						{
							console.log(data);
						}
				)
			}

	}
