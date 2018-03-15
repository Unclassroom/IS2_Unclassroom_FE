import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuzonentradaComponent } from './buzonentrada.component';

describe('BuzonentradaComponent', () => {
  let component: BuzonentradaComponent;
  let fixture: ComponentFixture<BuzonentradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuzonentradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuzonentradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
