import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-work-child',
  templateUrl: './work-child.component.html',
  styleUrls: ['./work-child.component.css']
})
export class WorkChildComponent implements OnInit {

  @Input() fromParent: any;
  constructor() { }

  ngOnInit() {
  }

}
