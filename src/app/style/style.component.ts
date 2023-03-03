import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})
export class StyleComponent {

 @Input() color = 'white';
 @Input() bgColor = 'lightblue';
 size = '25px'

  constructor() {

  }

  changeSize(size: string) {
    this.size = size + 'px';
  }

}
