import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable(
	{
		providedIn: 'root'
	}
)

export class ChallengeService {

	constructor(
		private httpClient : HttpClient
	) { }

	getAllByEventId
	(
		eventId: string
	)
		{
			var headers: HttpHeaders = new HttpHeaders(
				{
					"eventid": eventId
				}
			);
			return this.httpClient.get('http://localhost:6002/challenge/getAllByEvent',{
				headers:headers
			});
		}
}
