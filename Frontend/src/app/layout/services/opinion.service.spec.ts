import { TestBed, inject } from '@angular/core/testing';

import { OpinionService } from './opinion.service';

describe('OpinionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpinionService]
    });
  });

  it('should be created', inject([OpinionService], (service: OpinionService) => {
    expect(service).toBeTruthy();
  }));
});
