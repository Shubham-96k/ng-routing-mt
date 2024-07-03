import { Injectable, OnInit } from '@angular/core';
import { Iuser } from '../model/Iuser';
import { userArray } from '../const/user';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userArr : Iuser[] = userArray
  constructor(
    private _snacksvc : SnackbarService
  ) { }

  
  fetchuserdata(){
    return this.userArr;
  }

  fetchuserobj(id : string){
    return this.userArr.find(ele => ele.userId === id) as Iuser;
  }

  onupdateuser(userobj : Iuser){
    this.userArr[this.userArr.findIndex(ele => ele.userId === userobj.userId)] = userobj;
    this._snacksvc.opensnackbar(`${userobj.username} is updated successfully !!!`);
  }

  onAddnewuser(user: Iuser){
    this.userArr.push(user);
    this._snacksvc.opensnackbar(`${user.username} is added successfully !!!`);
  }

  onRemoveuser(id : string){
    
      
     
        let getindex = this.userArr.findIndex(user => user.userId === id);
        
        this._snacksvc.opensnackbar(`${this.userArr[getindex].username} has been removed successfully !!!`);
        this.userArr.splice(getindex, 1);
      
  }

}
