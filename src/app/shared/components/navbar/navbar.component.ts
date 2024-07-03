import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(
    private _auth : AuthService
  ) { }

  foradmin !: boolean;
  foruser !: boolean;

  ngOnInit(): void {
    if(localStorage.getItem('userRole') as string === 'buyer'){
      this.foruser = true;
    }else if(localStorage.getItem('userRole') as string === 'admin'){
      this.foradmin = true;
      this.foruser = true;
    }

    
  }

  onlogout(){
    this._auth.onlogout()
  }

}
