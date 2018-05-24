import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassAvaComponent } from './class-ava.component';

describe('ClassAvaComponent', () => {
  let component: ClassAvaComponent;
  let fixture: ComponentFixture<ClassAvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassAvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassAvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
