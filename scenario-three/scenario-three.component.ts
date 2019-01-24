import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-scenario-three',
  templateUrl: './scenario-three.component.html',
  styleUrls: ['./scenario-three.component.css']
})
export class ScenarioThreeComponent implements OnInit {

  parentString =  new FormControl('');
  transferData: string;
  title = 'Scenario Three';
  constructor() { }

  ngOnInit() {
  }

  passValue() {
    this.transferData = this.parentString.value;
  }


}
