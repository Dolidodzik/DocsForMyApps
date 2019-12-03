import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-subpage',
  templateUrl: './subpage.component.html',
  styleUrls: ['./subpage.component.sass']
})
export class SubpageComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
      console.log(this.route.params.value)
  }

  ngOnInit() {

  }

}
