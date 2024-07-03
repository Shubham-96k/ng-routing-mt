import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/iproduct';
import { ProductService } from 'src/app/shared/services/product.service';
import { ProdDialogComponent } from '../prod-dialog/prod-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.scss']
})
export class SingleproductComponent implements OnInit {
  prodobj !: Iproduct;

  
  constructor(
    private _route : ActivatedRoute,
    private _router : Router,
    private _prodsvc : ProductService,
    public dialog: MatDialog,
  ) { 
    this._route.data.subscribe(res => {
      this.prodobj = res['product']
    })
  }

  ngOnInit(): void {
  }


  onRemove(): void {
    const dialogRef = this.dialog.open(ProdDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      
      if(result){
        this._prodsvc.onRemoveproduct(this.prodobj.pId, result)
      }else{
        return;
      }
      this._router.navigate(['products'])
    });

    
  }

}
