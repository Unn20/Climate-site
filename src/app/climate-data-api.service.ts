import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ClimateDataApiService {
    private static temperatureDataApiUrl = 'http://localhost:3000/api/climate-data/temperature';
    private static co2DataApiUrl = 'http://localhost:3000/api/climate-data/co2';
    private static methaneDataApiUrl = 'http://localhost:3000/api/climate-data/methane';
    private static nitrousOxideDataApiUrl = 'http://localhost:3000/api/climate-data/nitrous-oxide';
    private static arcticDataApiUrl = 'http://localhost:3000/api/climate-data/arctic';

    constructor(private httpClient: HttpClient) {
    }

            /* Get data from given APIs */
    public getTemperatureData(): Observable<any> {
        return this.httpClient.get(ClimateDataApiService.temperatureDataApiUrl);
    }

    public getCo2Data(): Observable<any> {
        return this.httpClient.get(ClimateDataApiService.co2DataApiUrl);
    }

    public getMethaneData(): Observable<any> {
        return this.httpClient.get(ClimateDataApiService.methaneDataApiUrl);
    }

    public getNitrousOxideData(): Observable<any> {
        return this.httpClient.get(ClimateDataApiService.nitrousOxideDataApiUrl);
    }

    public getArcticData(): Observable<any> {
        return this.httpClient.get(ClimateDataApiService.arcticDataApiUrl);
    }
            /* *********** */
}
