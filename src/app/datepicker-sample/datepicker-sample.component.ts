import { Component, OnInit } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-datepicker-sample',
  templateUrl: './datepicker-sample.component.html',
  styleUrls: ['./datepicker-sample.component.css']
})
export class DatepickerSampleComponent implements OnInit {
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'mm-yyyy'
  };

// Initialized to specific date (09.10.2018).
public model: any = { date: { year: 2018, month: 10, day: 9 } };
  constructor() { }

  ngOnInit() {
  }

}
