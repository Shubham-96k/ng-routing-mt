import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

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

}
