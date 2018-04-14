import { TestBed, async, inject } from '@angular/core/testing';

import { OuthGuard } from './outh.guard';

describe('OuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OuthGuard]
    });
  });

  it('should ...', inject([OuthGuard], (guard: OuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
