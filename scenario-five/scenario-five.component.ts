import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario-five',
  templateUrl: './scenario-five.component.html',
  styleUrls: ['./scenario-five.component.css']
})
export class ScenarioFiveComponent implements OnInit {

  title = 'Scenario Five';
  fromChild: any;
  constructor() { }

  ngOnInit() {
  }

  childEventHander($event) {
    this.fromChild = $event;
  }

}
