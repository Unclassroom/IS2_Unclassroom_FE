import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestbagComponent } from './requestbag.component';

describe('RequestbagComponent', () => {
  let component: RequestbagComponent;
  let fixture: ComponentFixture<RequestbagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestbagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestbagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
