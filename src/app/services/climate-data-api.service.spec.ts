import {TestBed} from '@angular/core/testing';

import {ClimateDataApiService} from './climate-data-api.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('FiguresService', () => {
    let service: ClimateDataApiService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
        service = TestBed.inject(ClimateDataApiService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should contain backend URL', () => {
        expect(service.backendUrl).toBeTruthy();
    });
});
