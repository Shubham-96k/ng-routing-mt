import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Iuser } from '../model/Iuser';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<Iuser> {
  constructor(private _usrsvc : UserService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Iuser> | Iuser | Promise<Iuser> {
    let getid = route.params['userId'];
    return this._usrsvc.fetchuserobj(getid);
  }
}
