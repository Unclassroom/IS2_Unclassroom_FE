import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurposeClassroomComponent } from './purpose-classroom.component';

describe('PurposeClassroomComponent', () => {
  let component: PurposeClassroomComponent;
  let fixture: ComponentFixture<PurposeClassroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurposeClassroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurposeClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
