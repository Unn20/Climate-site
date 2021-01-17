import {TestBed} from '@angular/core/testing';

import {CountersService} from './counters.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CountersService', () => {
    let service: CountersService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
        service = TestBed.inject(CountersService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
