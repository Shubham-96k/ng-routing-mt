import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserRoleGuard implements CanActivate {

  constructor(
    private _router : Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      let userRole : string = localStorage.getItem('userRole') as string;
      let userArr : Array<string> = route.data['userRole'];

      if(userArr.includes(userRole)){
        return true;
      }else{
        const urlTree : UrlTree = this._router.createUrlTree(['home']);
        return urlTree;
      }
  }
  
}
