import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentregComponent } from './comentreg.component';

describe('ComentregComponent', () => {
  let component: ComentregComponent;
  let fixture: ComponentFixture<ComentregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
