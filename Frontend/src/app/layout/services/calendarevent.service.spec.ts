import { TestBed, inject } from '@angular/core/testing';

import { CalendareventService } from './calendarevent.service';

describe('CalendareventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalendareventService]
    });
  });

  it('should be created', inject([CalendareventService], (service: CalendareventService) => {
    expect(service).toBeTruthy();
  }));
});
