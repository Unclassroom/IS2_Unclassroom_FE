import { TestBed, inject } from '@angular/core/testing';

import { HeadBuildingService } from './head-building.service';

describe('HeadBuildingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeadBuildingService]
    });
  });

  it('should be created', inject([HeadBuildingService], (service: HeadBuildingService) => {
    expect(service).toBeTruthy();
  }));
});
