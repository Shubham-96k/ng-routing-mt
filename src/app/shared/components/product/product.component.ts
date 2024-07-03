import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../model/iproduct';
import { MatDialog } from '@angular/material/dialog';
import { ProdDialogComponent } from './prod-dialog/prod-dialog.component';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  prodarr !: Array<Iproduct>;
  selectedid !: string;

  constructor(
    public dialog: MatDialog,
    private _prodsvc : ProductService,
    private _router : Router
  ) {}

  

  ngOnInit(): void {
    this.prodarr = this._prodsvc.fetchproductdata();
    this.selectedid = this.prodarr[0].pId;
    this._router.navigate(['/products', this.selectedid], {
      queryParams : {
        canEdit : this.prodarr[0].canReturn
      }
    })
  }

}
