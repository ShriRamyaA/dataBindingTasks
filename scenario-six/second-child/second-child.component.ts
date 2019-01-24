import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent implements OnInit {

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
