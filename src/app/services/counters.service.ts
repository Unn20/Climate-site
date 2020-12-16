import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountersService {
  url = 'http://3.135.244.176:3000/api/counters';
  urlDev = 'http://localhost:3000/api/counters';

  constructor(private httpClient: HttpClient) { }

  getCountersData(): Observable<number[]> {
      return this.httpClient.get<number[]>(this.urlDev);
  }
}
