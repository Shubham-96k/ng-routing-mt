import { Injectable } from '@angular/core';
import { SnackbarService } from './snackbar.service';
import { Iproduct } from '../model/iproduct';
import { prodarr } from '../const/user';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  arrofprod : Iproduct[] = prodarr;

  constructor(
    private _snackbar : SnackbarService
  ) { }

  fetchproductdata() : Iproduct[]{
    return this.arrofprod;
  }

  fetchprodobj(id : string) : Iproduct{
    return this.arrofprod.find(ele => ele.pId === id) as Iproduct;
  }

  onUpdate(obj : Iproduct){
    this.arrofprod[this.arrofprod.findIndex(ele => ele.pId === obj.pId)] = obj;
    this._snackbar.opensnackbar(`${obj.pname} has been updated successfully !!!`);
  }

  onAddproduct(product : Iproduct){
    this.arrofprod.push(product);
    this._snackbar.opensnackbar(`${product.pname} is added successfully !!!`);
  }

  onRemoveproduct(id: string,confirm : boolean){
    if(confirm){
      let getindex = this.arrofprod.findIndex(prod => prod.pId === id);
      this._snackbar.opensnackbar(`${this.arrofprod[getindex].pname} has been removed successfully !!!`);
      this.arrofprod.splice(getindex,1)
    }
  }


}
