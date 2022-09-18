import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:any=[];

  constructor(private api:UsersService) { }

  ngOnInit(): void {
    this.api.getUsers().subscribe(res=>{
      console.log(res);
      this.users=res;
      console.log(this.users);
    })
  }

}
