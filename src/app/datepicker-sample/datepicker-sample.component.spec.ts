import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerSampleComponent } from './datepicker-sample.component';

describe('DatepickerSampleComponent', () => {
  let component: DatepickerSampleComponent;
  let fixture: ComponentFixture<DatepickerSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
