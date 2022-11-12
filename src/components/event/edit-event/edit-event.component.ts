import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatetimeHelperService } from 'src/helper/dateTime/datetime-helper.service';
import { Event } from 'src/models/event';
import { EventService } from 'src/services/event/event.service';

@Component(
	{
	selector: 'edit-event',
	templateUrl: './edit-event.component.html',
	styleUrls: ['./edit-event.component.scss']
	}
)

export class EditEventComponent implements OnInit {

	eventId: string ='';
	event:Event ={};
	tagListString: string = '';
	localStartDateTime: string = '';
	localEndDateTime: string = '';

	constructor(
		private route: ActivatedRoute,
		private eventService: EventService,
		private datetimeHelperService: DatetimeHelperService
	) { }

	getEventByEventId(
		eventId: string
	):void
		{
			this.eventService.get(
				eventId
			).subscribe(
				(data:any) => {
					
					this.event = data.event;
					this.eventId = data.event._id;
					this.localStartDateTime = this.datetimeHelperService.convertDateTimeStringToLocalDateTimeString(
						data.event.startDateTime
					)
					this.localEndDateTime = this.datetimeHelperService.convertDateTimeStringToLocalDateTimeString(
						data.event.endDateTime
					)
					console.log(this.event);
				}
			)
		}

	ngOnInit(): void {
		
		this.route.params
				.subscribe(params => 
					{
						let eventId: string = params['eventId']; 
						this.getEventByEventId(eventId);
				
					}
				);
	}

	getTagList():string[]{
		let result = this.tagListString.split(',');
		return result;
	}

	saveEvent():void
			{
				this.event.tagList = this.getTagList();
				this.event.startDateTime = this.datetimeHelperService.convertLocalDateTimeToDateTimeInteger(
					this.localStartDateTime
				);
				this.event.endDateTime = this.datetimeHelperService.convertLocalDateTimeToDateTimeInteger(
					this.localEndDateTime
				)

				this.event.registerDate = this.datetimeHelperService.convertLocalDateTimeToDateTimeInteger(
					this.event.registerDate.toString()
				)
				
				this.eventService.update(
					this.eventId,
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
