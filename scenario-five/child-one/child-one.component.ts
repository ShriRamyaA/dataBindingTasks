import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

  @Output() childToParent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  grandChildEventHander($event) {
   this.childToParent.emit($event);
  }

}
