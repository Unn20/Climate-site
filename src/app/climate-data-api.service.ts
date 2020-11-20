import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ClimateDataApiService {
    temperatureDataApiUrl = 'http://localhost:3000/api/climate-data/temperature';
    co2DataApiUrl = 'http://localhost:3000/api/climate-data/co2';
    methaneDataApiUrl = 'http://localhost:3000/api/climate-data/methane';
    nitrousOxideDataApiUrl = 'http://localhost:3000/api/climate-data/nitrous-oxide';
    arcticDataApiUrl = 'http://localhost:3000/api/climate-data/arctic';

    constructor(private httpClient: HttpClient) {
    }

            /* Get data from given APIs */
    getTemperatureData(): Observable<any> {
        return this.httpClient.get(this.temperatureDataApiUrl);
    }

    getCo2Data(): Observable<any> {
        return this.httpClient.get(this.co2DataApiUrl);
    }

    getMethaneData(): Observable<any> {
        return this.httpClient.get(this.methaneDataApiUrl);
    }

    getNitrousOxideData(): Observable<any> {
        return this.httpClient.get(this.nitrousOxideDataApiUrl);
    }

    getArcticData(): Observable<any> {
        return this.httpClient.get(this.arcticDataApiUrl);
    }
            /* *********** */
}
