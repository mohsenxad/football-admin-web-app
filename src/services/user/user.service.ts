import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
		private httpClient: HttpClient
	) { }

	getAll():any
		{
			return this.httpClient.get('http://localhost:6003/user/getAll');
		}
}
