import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-child-four',
  templateUrl: './child-four.component.html',
  styleUrls: ['./child-four.component.css']
})
export class ChildFourComponent implements OnInit {

  name = new FormControl();
  @Output() childToParent = new EventEmitter();
  tempStr: any;
  constructor() { }

  ngOnInit() {
  }

  transferData() {
    this.tempStr = this.name.value;
    this.childToParent.emit(this.tempStr);
  }

}
