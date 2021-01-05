import { TestBed } from '@angular/core/testing';

import { NasaCountersService } from './nasa-counters.service';

describe('NasaCountersService', () => {
  let service: NasaCountersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasaCountersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
