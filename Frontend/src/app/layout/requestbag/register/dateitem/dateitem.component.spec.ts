import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateitemComponent } from './dateitem.component';

describe('DateitemComponent', () => {
  let component: DateitemComponent;
  let fixture: ComponentFixture<DateitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
