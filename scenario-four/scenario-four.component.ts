import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario-four',
  templateUrl: './scenario-four.component.html',
  styleUrls: ['./scenario-four.component.css']
})
export class ScenarioFourComponent implements OnInit {

  title = 'Scenario Four';
  fromChild: any;
  constructor() { }

  ngOnInit() {
  }

  childEventHander($event) {
    this.fromChild = $event;
  }

}
