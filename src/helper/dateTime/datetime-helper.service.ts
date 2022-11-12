import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable(
	{
  		providedIn: 'root'
	}
)
export class DatetimeHelperService 
	{

		constructor() { }

		convertLocalDateTimeToDateTimeInteger(
			localDateTimeString:string
		):number
			{
				const result = new Date(localDateTimeString).getTime();
				console.log(result);

				return result;
			}

		convertDateTimeToLocalDateTimeString(
			dateTimeString:number
		):string
			{
				const result = new Date(dateTimeString).toLocaleString();
				console.log(result);

				return result;
			}

		convertDateTimeStringToLocalDateTimeString(
			dateTimeString:string
		):string
			{
				const result = formatDate(dateTimeString,"yyyy-MM-ddThh:mm","fa-IR");
				console.log(result);

				return result;
			}
	}
