import { TestBed, inject } from '@angular/core/testing';

import { ExternalPersonService } from './external-person.service';

describe('ExternalPersonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExternalPersonService]
    });
  });

  it('should be created', inject([ExternalPersonService], (service: ExternalPersonService) => {
    expect(service).toBeTruthy();
  }));
});
