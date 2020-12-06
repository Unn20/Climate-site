import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ClimateDataApiService {
    private static temperatureDataApiUrl = 'api/climate-data/temperature';
    private static co2DataApiUrl = 'api/climate-data/co2';
    private static methaneDataApiUrl = 'climate-data/methane';
    private static nitrousOxideDataApiUrl = 'api/climate-data/nitrous-oxide';
    private static arcticDataApiUrl = 'api/climate-data/arctic';

    backendUrl = environment.backend.url;

    constructor(private httpClient: HttpClient) {

    }

    public getTemperatureData(): Observable<any> {
        return this.httpClient.get(this.backendUrl + ClimateDataApiService.temperatureDataApiUrl);
    }

    public getCo2Data(): Observable<any> {
        return this.httpClient.get(this.backendUrl + ClimateDataApiService.co2DataApiUrl);
    }

    public getMethaneData(): Observable<any> {
        return this.httpClient.get(this.backendUrl + ClimateDataApiService.methaneDataApiUrl);
    }

    public getNitrousOxideData(): Observable<any> {
        return this.httpClient.get(this.backendUrl + ClimateDataApiService.nitrousOxideDataApiUrl);
    }

    public getArcticData(): Observable<any> {
        return this.httpClient.get(this.backendUrl + ClimateDataApiService.arcticDataApiUrl);
    }
}
