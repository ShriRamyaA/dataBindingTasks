import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-scenario-two',
  templateUrl: './scenario-two.component.html',
  styleUrls: ['./scenario-two.component.css']
})
export class ScenarioTwoComponent implements OnInit {

  name = new FormControl('');
  title = 'Scenario Two';
  display: string;

  constructor() { }

  ngOnInit() {
  }

  displayData() {
    this.display = this.name.value;
  }

}
