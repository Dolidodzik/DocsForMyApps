import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";


import json from "./contents.js"

@Component({
  selector: 'app-subpage',
  templateUrl: './subpage.component.html',
  styleUrls: ['./subpage.component.sass']
})

export class SubpageComponent implements OnInit {

  subpage = ['foodie', 'overview']
  contents = null

  Header:string = 'Welcome to MyDocs!';
  Text:string = 'This site is simple styled, piece of documentation for my own, open-source projects. Here you can read how my code works.';
  Code:string = 'Welcome to MyDocs!';

  constructor(private route: ActivatedRoute, private router: Router){
    this.route.params.subscribe( params => {
      this.subpage = [params.project_name, params.category];
    });

    if( json[this.subpage[0]] && json[this.subpage[0]][this.subpage[1]] ){
      console.log("JD")
      this.contents = json[this.subpage[0]][this.subpage[1]].contents;
    }else{
      console.log("N")
      this.router.navigate(['/404'])
    }
    console.log(this.contents)
  }

  ngOnInit(){
  }

}
