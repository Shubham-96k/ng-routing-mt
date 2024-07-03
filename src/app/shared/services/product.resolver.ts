import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Iproduct } from '../model/iproduct';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Iproduct> {
  constructor(
    private _prodsvc : ProductService
  ){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Iproduct> | Promise<Iproduct> | Iproduct{
    let getid = route.params['prodId'];
    return this._prodsvc.fetchprodobj(getid);
  }
}
