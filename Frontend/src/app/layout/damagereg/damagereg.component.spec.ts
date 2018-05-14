import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamageregComponent } from './damagereg.component';

describe('DamageregComponent', () => {
  let component: DamageregComponent;
  let fixture: ComponentFixture<DamageregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamageregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamageregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
