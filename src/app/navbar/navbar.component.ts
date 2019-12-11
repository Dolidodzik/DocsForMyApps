import { Component } from '@angular/core';
import json from '../subpage/contents.js';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})

export class NavbarComponent{

  choices = ["typing_speed_test", "overview"]
  json = json

  constructor(){
    //console.log(this.categories())
  }

  navbarOpen = false;

  toggleNavbar(){
    this.navbarOpen = !this.navbarOpen;
  }

  onProjectClick($event){
    this.choices[0] = $event.target.innerHTML.trim();
    this.choices[1] = "overview"
  }

  categories(){ return json[this.choices[0]]; }

}
