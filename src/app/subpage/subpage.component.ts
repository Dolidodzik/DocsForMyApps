import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-subpage',
  templateUrl: './subpage.component.html',
  styleUrls: ['./subpage.component.sass']
})

export class SubpageComponent implements OnInit {

  subpage = ['foodie', 'overview']

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.subpage = [params.params.project_name, params.params.category];
    });
  }

  ngOnInit() {

  }

}
