import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, CanDeactivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Iuser } from 'src/app/shared/model/Iuser';
import { Icandeactivate } from 'src/app/shared/model/icandeactivate';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { UserService } from 'src/app/shared/services/user.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit, Icandeactivate{

  constructor(
    private _route : ActivatedRoute,
    private _usersvc : UserService,
    private _router : Router,
    private _uuid : UuidService,
    private _snackbar : SnackbarService
  ) { 
   
  }


  userform !: FormGroup;
  userid !: string;
  userobj !: Iuser;
  canUpdate !: boolean;
  isinEditmode : boolean = false;

  ngOnInit(): void {
    this.oncreateform();
    this.userid = this._route.snapshot.params['userId'];
    this.getuserobj();
    if(this.userid){
      this.isinEditmode = true;
      
      this.userform.patchValue(this.userobj);

      this._route.queryParams
        .subscribe(res => {
          if(res['userRole'] == 'Admin'){
            this.userform.enable()
            this.canUpdate = true;
          }else{
            this.userform.disable()
            this.canUpdate = false;
          }
        })
    }else{
      this.isinEditmode = false;
    }
  }



  oncreateform(){
    this.userform = new FormGroup({
      username : new FormControl(null, Validators.required),
      userRole : new FormControl(null, Validators.required),
      userProfile : new FormControl(null, Validators.required)
    })
  }

  getuserobj(){
    this._route.params.subscribe(res => {
      this.userobj = this._usersvc.fetchuserobj(this.userid)
    })
  }

  onupdateuser(){
    if(this.userform.valid){
      let udptobj = {
        ...this.userform.value,
        userId : this.userobj.userId
      }
      this._usersvc.onupdateuser(udptobj);
      this.userform.reset()
      this._router.navigate(['/users'])
    }
  }

  onadduser(){
    if(this.userform.valid){
      let newuser = {
        ...this.userform.value,
        userId : this._uuid.generateUuid()
      }
      this._usersvc.onAddnewuser(newuser);
    }else{
      this._snackbar.opensnackbar("Invalid data can't add product please enter valid product details")
    }
    this._router.navigate(['users'])
    this.userform.reset();
  }

  candeactive(){
    if(this.userform.dirty){
      return confirm('Are you Sure you want to discard changes');
    }
    return true
  }
}
