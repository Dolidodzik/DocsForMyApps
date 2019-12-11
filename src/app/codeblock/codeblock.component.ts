import { Component, Input } from '@angular/core';
import * as prism from 'prismjs';


@Component({
  selector: 'app-codeblock',
  templateUrl: './codeblock.component.html',
  styleUrls: ['./codeblock.component.sass']
})

export class CodeblockComponent{
  @Input() code:string;
  language = 'html';
  prism = prism;
  content = '<p>test</p>';
  constructor(){
    console.log(this.content)
  }
}
