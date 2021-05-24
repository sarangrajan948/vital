import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isMenuCollapsed = true;  
  // isShowDiv = false;
  // showdiv=true;


  constructor(private router: Router) { }

  ngOnInit() {
  }
  // about(){
  //   this.router.navigate(['/about']);
  // }
  // services(){
  //   this.router.navigate(['/services']);
  // }
  // contact(){
  //   this.router.navigate(['/contact']);
  // }
  // team(){
  //   this.router.navigate(['/team']);
  // }
}
