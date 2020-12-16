import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountersService {
  // Do usunięcia po zaimplementowaniu i zmergowaniu pull requesta
  urlDev = 'http://localhost:3000/api/counters';

  constructor(private httpClient: HttpClient) { }

  getCountersData(): Observable<number[]> {
      return this.httpClient.get<number[]>(environment.backend.url);
  }
}
