import { TestBed } from '@angular/core/testing';

import { ClimateDataApiService } from './climate-data-api.service';

describe('FiguresService', () => {
  let service: ClimateDataApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClimateDataApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
