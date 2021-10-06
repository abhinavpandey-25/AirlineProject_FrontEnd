import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';
import { User } from './User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList:User[]=[];
  constructor(private service:UserService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData()
  {
    this.service.getAllUsers().subscribe((data:any)=>
    {
      this.userList = data;
    })
  }
}
