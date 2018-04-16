import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectioninfoComponent } from './sectioninfo.component';

describe('SectioninfoComponent', () => {
  let component: SectioninfoComponent;
  let fixture: ComponentFixture<SectioninfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectioninfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectioninfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
