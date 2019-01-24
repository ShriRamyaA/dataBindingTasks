import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {

  name = new FormControl();
  @Output() grandchildToChild = new EventEmitter();
  tempStr: any;
  constructor() { }

  ngOnInit() {
  }

  transferData() {
    this.tempStr = this.name.value;
    this.grandchildToChild.emit(this.tempStr);
  }

}
