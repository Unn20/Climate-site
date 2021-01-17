import {TestBed} from '@angular/core/testing';

import {NasaCountersService} from './nasa-counters.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('NasaCountersService', () => {
    let service: NasaCountersService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
        service = TestBed.inject(NasaCountersService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
