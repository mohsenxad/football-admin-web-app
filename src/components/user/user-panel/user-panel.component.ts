import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { UserService } from 'src/services/user/user.service';

@Component(
	{
		selector: 'app-user-panel',
		templateUrl: './user-panel.component.html',
		styleUrls: ['./user-panel.component.scss']
	}
)
export class UserPanelComponent implements OnInit {

	userList:User[] =[];
	constructor(
		private userService:UserService
	) { }

	ngOnInit(): void {
		this.getAllUser();
	}

	getAllUser():void
		{
			this.userService.getAll()
			.subscribe((data:any) => 
				{
					this.userList = data.userList;
			  	}
			)
		}

}
