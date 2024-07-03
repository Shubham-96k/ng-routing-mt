import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Ilogin } from '../model/Iuser';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _router : Router,
    private _snackbar : SnackbarService
  ) { }

  userLoginState : boolean = false;
  userLoginSub$ : Subject<boolean> = new Subject<boolean>();


  onlogin(obj : Ilogin){
    if(obj.email === 'jhon@gmail.com' && obj.password === 'zaq1ZAQ!'){
      console.log('logged in sucessfully!!!');
      
      this.userLoginState = true;
      this.userLoginSub$.next(this.userLoginState);
      localStorage.setItem('token', 'JWT Token....');
      localStorage.setItem('userRole', 'buyer');
      this._router.navigate(['home']);
    }else if(obj.email === 'june@gmail.com' && obj.password === 'zaq1ZAQ!'){
      console.log('logged in sucessfully!!!');

      this.userLoginState = true;
      this.userLoginSub$.next(this.userLoginState);
      localStorage.setItem('token', 'JWT Token....');
      localStorage.setItem('userRole', 'admin');
      this._router.navigate(['home']);
    }else{
      this._snackbar.opensnackbar(`Invalid username and Password!`)
    }
  }

  onlogout(){
    console.log('logged out successfully!');
    
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    this.userLoginState = false;
    this.userLoginSub$.next(this.userLoginState);
    this._router.navigate(['']);
  }


  isAuthenticated(){
    return new Promise<boolean>((res, rej) => {
      setTimeout(()=>{
        if(localStorage.getItem('token')){
          this.userLoginState = true;
          this.userLoginSub$.next(this.userLoginState);

        }else{
          this.userLoginState = false;
          this.userLoginSub$.next(this.userLoginState);
          this._router.navigate([''])
        }
        res(this.userLoginState);
      },1000)
    })
  }
}
