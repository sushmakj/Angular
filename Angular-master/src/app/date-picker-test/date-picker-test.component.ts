import { Component, OnInit } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-picker-test',
  templateUrl: './date-picker-test.component.html',
  styleUrls: ['./date-picker-test.component.css']
})
export class DatePickerTestComponent implements OnInit {
date: NgbDate;
  constructor() { }

  ngOnInit() {
  }
onSelect(event){
  console.log(event);
  this.date=event;
}
}
