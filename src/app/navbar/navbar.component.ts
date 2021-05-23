import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // isShowDiv = false;
  // showdiv=true;


  constructor(private router: Router) { }

  ngOnInit() {
  }
  // check(){
  //   this.isShowDiv = this.isShowDiv;
  // }
  about(){
    this.router.navigate(['/about']);
    // this.isShowDiv = !this.isShowDiv;
  }
  services(){
    this.router.navigate(['/services']);
  }
  contact(){
    this.router.navigate(['/contact']);
  }
  team(){
    this.router.navigate(['/team']);
  }
}
