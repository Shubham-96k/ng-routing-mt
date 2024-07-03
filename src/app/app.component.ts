import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-routing-mt';


  userloginstate !: boolean;

  constructor(
    private _auth : AuthService
  ){
    this._auth.userLoginSub$.subscribe(res => {
      this.userloginstate = res;
    })
  }


}
