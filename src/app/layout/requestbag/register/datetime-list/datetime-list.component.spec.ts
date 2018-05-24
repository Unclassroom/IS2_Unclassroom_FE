import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {DatetimeListComponent} from './datetime-list.component';

describe('DatetimeListComponent', () => {
  let component: DatetimeListComponent;
  let fixture: ComponentFixture<DatetimeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatetimeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatetimeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
