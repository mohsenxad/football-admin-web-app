import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from 'src/models/event';

@Injectable(
	{
  		providedIn: 'root'
	}
)
export class EventService {

	constructor(
		private httpClient: HttpClient
	) { }

	getAll():any
		{
			return this.httpClient.get('http://localhost:6001/event/getAll');
		}
	
	get(
		eventId: string
	):any
	{
		var headers: HttpHeaders = new HttpHeaders(
			{
				eventid: eventId
			}
		);
		return this.httpClient.get('http://localhost:6001/event/get',{headers:headers});
	}

	delete(
		eventId? : string
	):any 
		{
			var headers: HttpHeaders = new HttpHeaders(
				{
					eventid: eventId || ""
				}
			);
			
			return this.httpClient.delete('http://localhost:6001/event/delete',{
				headers : headers
			});
		}

	postOnChannel(
		eventId? : string
	):any
		{
			var headers: HttpHeaders = new HttpHeaders();
			const body  = {
				eventId: eventId
			}
			return this.httpClient.post('http://localhost:6001/event/postOnTelegram',body,{
				headers : headers
			});
		}

	add(
		event : Event
	):any
		{
			var headers: HttpHeaders = new HttpHeaders();
			const body  = {
				event: event
			}
			return this.httpClient.post('http://localhost:6001/event/add',body,{
				headers : headers
			});
		}

	update(
		eventId: string,
		event : Event
	):any
		{
			var headers: HttpHeaders = new HttpHeaders();
			const body  = {
				eventId:eventId,
				event: event
			}
			return this.httpClient.post('http://localhost:6001/event/update',body,{
				headers : headers
			});
		}
}
