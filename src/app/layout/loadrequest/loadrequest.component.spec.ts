import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadrequestComponent } from './loadrequest.component';

describe('LoadrequestComponent', () => {
  let component: LoadrequestComponent;
  let fixture: ComponentFixture<LoadrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
