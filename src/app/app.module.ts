import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { DatepickerSampleComponent } from './datepicker-sample/datepicker-sample.component';
import { MyDatePickerModule} from 'mydatepicker';
import { MonthPickerComponent } from './month-picker/month-picker.component';
import { YearPickerComponent } from './year-picker/year-picker.component';
@NgModule({
  declarations: [
    AppComponent,
    DatepickerSampleComponent,
    MonthPickerComponent,
    YearPickerComponent
  ],
  imports: [
    BrowserModule, MyDatePickerModule, FormsModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
