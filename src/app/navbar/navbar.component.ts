import { Component } from '@angular/core';
import json from '../subpage/contents.js';
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})

export class NavbarComponent{

  /* First element is project name, second is category/part of application name */
  choices = ["typing_speed_test", "overview"]
  json = json

  navbarOpen = false;

  constructor(private router: Router){}

  toggleNavbar(){
    this.navbarOpen = !this.navbarOpen;
  }

  onProjectClick($event){
    this.choices[0] = $event.target.innerHTML.trim();
    this.choices[1] = "overview";
    this.redirect();
  }

  onCategoryClick($event){
    this.choices[1] = $event.target.innerHTML.trim();
    this.redirect();
  }

  redirect(){
    this.router.navigateByUrl( "project/"+this.choices[0]+"/"+this.choices[1] );
  }

  categories(){ return json[this.choices[0]]; }

}
