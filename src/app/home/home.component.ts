import { Component, OnInit } from '@angular/core';

/* Standard page elements imports */
import { HeaderComponent } from '../header/header.component';
import { TextComponent } from './text/text.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  Header:string = 'Welcome to MyDocs';
  Text:string = 'This site is simple styled, piece of documentation for my own, open-source projects. Here you can read how my code works';

  ngOnInit() {
  }

}
