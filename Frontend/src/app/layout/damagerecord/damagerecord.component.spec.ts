import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamagerecordComponent } from './damagerecord.component';

describe('DamagerecordComponent', () => {
  let component: DamagerecordComponent;
  let fixture: ComponentFixture<DamagerecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamagerecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamagerecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
