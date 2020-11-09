import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountersService {
    countersData: number[] = [3456, 12, 98, 234, 53645, 345];

  constructor() { }

  getCountersData(): Observable<any> {
      return of(this.countersData);
  }
}
