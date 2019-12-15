import { Component, Input } from '@angular/core';
import * as Prism from 'prismjs';

@Component({
  selector: 'app-codeblock',
  templateUrl: './codeblock.component.html',
  styleUrls: ['./codeblock.component.sass']
})

export class CodeblockComponent{
  @Input() code:string;
  @Input() language:string;
}
