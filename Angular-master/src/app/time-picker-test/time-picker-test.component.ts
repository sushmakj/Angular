import { Component, OnInit } from '@angular/core';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';

@Component({
  selector: 'app-time-picker-test',
  templateUrl: './time-picker-test.component.html',
  styleUrls: ['./time-picker-test.component.css']
})
export class TimePickerTestComponent implements OnInit {
time: NgbTime;
  constructor() { }

  ngOnInit() {
  }

}
