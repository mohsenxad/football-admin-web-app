import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Challenge } from 'src/models/challenge';

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

	get
	(
		challengeId: string
	)
		{
			var headers: HttpHeaders = new HttpHeaders(
				{
					"challengeid": challengeId
				}
			);
			return this.httpClient.get('http://localhost:6002/challenge/get',{
				headers:headers
			});
		}

	postOnChannel(
		challengeId : string
	):any
		{
			var headers: HttpHeaders = new HttpHeaders();
			const body  = {
				challengeId: challengeId
			}
			return this.httpClient.post('http://localhost:6002/challenge/postOnTelegram',body,{
				headers : headers
			});
		}

	setResultOption
	(
		challengeId: string,
		challengeOptionId?: string
	)
		{
			var headers: HttpHeaders = new HttpHeaders();
			const body  = {
				challengeId: challengeId,
				challengeOptionId: challengeOptionId
			}
			return this.httpClient.post('http://localhost:6002/challenge/setResultOption',body,{
				headers : headers
			});
		}

	add(
		challenge : Challenge
	):any
		{
			var headers: HttpHeaders = new HttpHeaders();
			const body  = {
				challenge: challenge
			}
			return this.httpClient.post('http://localhost:6002/challenge/add',body,{
				headers : headers
			});
		}

	update(
		challengeId: string,
		challenge : Challenge
	):any
		{
			var headers: HttpHeaders = new HttpHeaders();
			const body  = {
				challengeId:challengeId,
				challenge: challenge
			}
			return this.httpClient.post('http://localhost:6002/challenge/update',body,{
				headers : headers
			});
		}

	delete(
		challengeId? : string
	):any 
		{
			var headers: HttpHeaders = new HttpHeaders(
				{
					challengeid: challengeId || ""
				}
			);
			
			return this.httpClient.delete('http://localhost:6002/challenge/delete',{
				headers : headers
			});
		}
}
