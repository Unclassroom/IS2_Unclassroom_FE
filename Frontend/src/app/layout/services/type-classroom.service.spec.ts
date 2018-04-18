import { TestBed, inject } from '@angular/core/testing';

import { TypeClassroomService } from './type-classroom.service';

describe('TypeClassroomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeClassroomService]
    });
  });

  it('should be created', inject([TypeClassroomService], (service: TypeClassroomService) => {
    expect(service).toBeTruthy();
  }));
});
