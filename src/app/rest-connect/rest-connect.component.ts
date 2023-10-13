import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../IUser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rest-connect',
  templateUrl: './rest-connect.component.html',
  styleUrls: ['./rest-connect.component.css']
})
export class RestConnectComponent implements OnInit {

  protected title = 'app';
 // protected users$: Observable<IUser[]>;
users$!: IUser[];
  constructor(public userservice: UserService) {}

  ngOnInit() {
    this.userservice.getUsers().subscribe(res => {
      this.users$ = res;
    });
  }

}
