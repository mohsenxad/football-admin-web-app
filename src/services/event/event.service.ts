import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll():any{
    return this.httpClient.get('http://localhost:6001/event/getAll');
  }
}
