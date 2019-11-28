import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.sass']
})
export class TextComponent implements OnInit {
  @Input() text:string;
}
