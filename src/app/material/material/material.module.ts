import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

let matarr = [
  MatToolbarModule,MatButtonModule,MatSnackBarModule,MatDialogModule,MatIconModule,MatCardModule,MatInputModule,
  MatSelectModule,
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...matarr
  ],
  exports : [
    ...matarr
  ]
})
export class MaterialModule { }
