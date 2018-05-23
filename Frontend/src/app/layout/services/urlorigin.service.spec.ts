import { TestBed, inject } from '@angular/core/testing';

import { UrloriginService } from './urlorigin.service';

describe('UrloriginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrloriginService]
    });
  });

  it('should be created', inject([UrloriginService], (service: UrloriginService) => {
    expect(service).toBeTruthy();
  }));
});
