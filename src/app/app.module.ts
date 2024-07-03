import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './shared/components/auth/auth.component';
import { HomeComponent } from './shared/components/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ProductComponent } from './shared/components/product/product.component';
import { UsersComponent } from './shared/components/users/users.component';
import { EdituserComponent } from './shared/components/users/edituser/edituser.component';
import { SingleuserComponent } from './shared/components/users/singleuser/singleuser.component';
import { EditproductComponent } from './shared/components/product/editproduct/editproduct.component';
import { SingleproductComponent } from './shared/components/product/singleproduct/singleproduct.component';
import { MaterialModule } from './material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProdDialogComponent } from './shared/components/product/prod-dialog/prod-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    NavbarComponent,
    PageNotFoundComponent,
    ProductComponent,
    UsersComponent,
    EdituserComponent,
    SingleuserComponent,
    EditproductComponent,
    SingleproductComponent,
    ProdDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
