import { Component, OnInit } from '@angular/core';

/* Standard page elements imports */
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  Header:string = 'This text is passed to child';

  ngOnInit() {
  }

}
