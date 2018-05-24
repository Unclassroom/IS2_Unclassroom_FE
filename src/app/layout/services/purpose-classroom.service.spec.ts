import { TestBed, inject } from '@angular/core/testing';

import { PurposeClassroomService } from './purpose-classroom.service';

describe('PurposeClassroomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PurposeClassroomService]
    });
  });

  it('should be created', inject([PurposeClassroomService], (service: PurposeClassroomService) => {
    expect(service).toBeTruthy();
  }));
});
