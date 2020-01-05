import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import json from "./contents/contents.js"

@Component({
  selector: 'app-subpage',
  templateUrl: './subpage.component.html',
  styleUrls: ['./subpage.component.sass']
})

export class SubpageComponent implements OnInit {

  subpage = ['foodie', 'overview']
  contents = null

  constructor(private route: ActivatedRoute, private router: Router){
    this.route.params.subscribe( params => {
      this.subpage = [params.project_name, params.category];
      if( json[this.subpage[0]] && json[this.subpage[0]][this.subpage[1]] ){
        this.contents = json[this.subpage[0]][this.subpage[1]].contents;
      }else{
        this.router.navigate(['/404'])
      }
    });


    console.log(this.contents)
  }

  ngOnInit(){
  }

}
