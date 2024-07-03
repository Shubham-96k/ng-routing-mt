import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/model/Iuser';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.scss']
})
export class SingleuserComponent implements OnInit {
  userObj !: Iuser;
  constructor(
    private _usersvc : UserService,
    private _route : ActivatedRoute,
    private _router : Router
  ) { 
    this._route.data.subscribe(res => {
      this.userObj = res['userobj']
    })
  }

  ngOnInit(): void {
  }


  gotoedit(){
    this._router.navigate(['edit'], {
      relativeTo : this._route,
      queryParamsHandling: 'preserve'
    })
  }

  onRemove(){
    let getconfirm = confirm('Are you Sure !!!');
    if(getconfirm){
      this._usersvc.onRemoveuser(this.userObj.userId);
      this._router.navigate(['/users',])
    }else{
      return;
    }
    
  }

}
