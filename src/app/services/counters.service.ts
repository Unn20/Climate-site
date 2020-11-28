import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountersService {
    countersData: number[] = [3456, 12, 98, 234, 53645, 345];

  constructor(private httpClient: HttpClient) { }

  getCountersData(): Observable<number[]> {
      return this.httpClient.get<number[]>('http://localhost:3000/api/counters');
  }
}
