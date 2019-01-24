import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario-six',
  templateUrl: './scenario-six.component.html',
  styleUrls: ['./scenario-six.component.css']
})
export class ScenarioSixComponent implements OnInit {

  title = 'Scenario Four';
  fromChild: any;
  passToFirstChild: any;
  constructor() { }

  ngOnInit() {
  }

  childEventHander($event) {
    this.fromChild = $event;
    this.passToFirstChild = this.fromChild;
  }


}
