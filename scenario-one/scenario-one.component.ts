import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-scenario-one',
  templateUrl: './scenario-one.component.html',
  styleUrls: ['./scenario-one.component.css']
})
export class ScenarioOneComponent implements OnInit {

  name = new FormControl('');
  title = 'Scenario One';

  constructor() { }

  ngOnInit() {
  }

  consoleDisplay() {
    console.log(this.name.value);
  }

}
