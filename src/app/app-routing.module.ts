import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { ProductComponent } from './shared/components/product/product.component';
import { UsersComponent } from './shared/components/users/users.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { EdituserComponent } from './shared/components/users/edituser/edituser.component';
import { SingleuserComponent } from './shared/components/users/singleuser/singleuser.component';
import { UserResolver } from './shared/services/user.resolver';
import { CandeactivateGuard } from './shared/services/candeactivate.guard';
import { EditproductComponent } from './shared/components/product/editproduct/editproduct.component';
import { SingleproductComponent } from './shared/components/product/singleproduct/singleproduct.component';
import { ProductResolver } from './shared/services/product.resolver';
import { AuthComponent } from './shared/components/auth/auth.component';
import { AuthGuard } from './shared/services/auth.guard';
import { UserRoleGuard } from './shared/services/user-role.guard';

const routes: Routes = [
  {
    path : '',
    component : AuthComponent,
    title : 'Dashboard'
  },
  {
    path : 'home',
    component : HomeComponent,
    title : 'Dashboard',
    canActivate : [AuthGuard]
  },
  {
    path : 'products',
    component : ProductComponent,
    title : 'Products',
    data : {
      userRole : ['buyer', 'admin']
    },
    canActivate : [AuthGuard, UserRoleGuard],
    children : [
      {
        path : 'addproduct',
        component : EditproductComponent
      },
      {
        path : ':prodId',
        component : SingleproductComponent,
        resolve : {
          product : ProductResolver
        }
      },
      {
        path : ':prodId/edit',
        component : EditproductComponent,
        canDeactivate : [CandeactivateGuard]
      }
    ]
  },
  {
    path : 'users',
    component : UsersComponent,
    title : 'Users',
    data : {
      userRole : ['admin']
    },
    canActivate : [AuthGuard, UserRoleGuard],
    children : [
      {
        path : 'addusers',
        component : EdituserComponent,
      },
      {
        path : ':userId',
        component : SingleuserComponent,
        resolve : {
          userobj : UserResolver
        }
      },
      {
        path : ':userId/edit',
        component : EdituserComponent,
        canDeactivate : [CandeactivateGuard]
      }
    ]
  },
  {
    path : 'page-not-found',
    component : PageNotFoundComponent,
    data : {
      msg : 'Page Not Found !!!'
    },
  },
  {
    path : '**',
    redirectTo : 'page-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
