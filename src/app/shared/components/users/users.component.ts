import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../model/Iuser';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userarr !: Iuser[];
  selectedid !: string;

  constructor(private _usersvc : UserService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.userarr = this._usersvc.fetchuserdata();
    this.selectedid = this.userarr[0].userId;
    this._router.navigate(['/users', this.selectedid], {
      queryParams : {
        userRole : this.userarr[0].userRole
      }
    })
  }


  onActive(id : string){
    this.selectedid = id;
  }

}
