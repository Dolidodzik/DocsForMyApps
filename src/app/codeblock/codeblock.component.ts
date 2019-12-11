import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-codeblock',
  templateUrl: './codeblock.component.html',
  styleUrls: ['./codeblock.component.sass']
})

export class CodeblockComponent{
  @Input() code:string;
  constructor(){
    console.log()
  }
}
