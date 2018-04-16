import { TestBed, inject } from '@angular/core/testing';

import { FalcultyService } from './falculty.service';

describe('FalcultyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FalcultyService]
    });
  });

  it('should be created', inject([FalcultyService], (service: FalcultyService) => {
    expect(service).toBeTruthy();
  }));
});
