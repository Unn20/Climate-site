import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class NasaCountersService {

    constructor(private httpClient: HttpClient) {
    }

    getNasaCountersData(): Observable<object[]> {
        return this.httpClient.get<object[]>(environment.backend.url + 'api/nasa-counters');
    }
}
