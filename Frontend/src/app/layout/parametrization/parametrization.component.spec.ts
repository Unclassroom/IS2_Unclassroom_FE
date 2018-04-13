import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrizationComponent } from './parametrization.component';

describe('ParametrizationComponent', () => {
  let component: ParametrizationComponent;
  let fixture: ComponentFixture<ParametrizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametrizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
