import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePickerTestComponent } from './time-picker-test.component';

describe('TimePickerTestComponent', () => {
  let component: TimePickerTestComponent;
  let fixture: ComponentFixture<TimePickerTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimePickerTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimePickerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
