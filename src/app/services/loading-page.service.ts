import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoadingPageService {
    private setErrorSource = new Subject<any>();
    private incrementItemsLoadingSource = new Subject<any>();
    private decrementItemsLoadingSource = new Subject<any>();

    // Observable string streams
    setErrorCalled$ = this.setErrorSource.asObservable();
    incrementItemsLoadingCalled$ = this.incrementItemsLoadingSource.asObservable();
    decrementItemsLoadingCalled$ = this.decrementItemsLoadingSource.asObservable();

    public setError(newValue: boolean): void {
        this.setErrorSource.next(newValue);
    }

    public incrementItemsLoading(): void {
        this.incrementItemsLoadingSource.next();
    }

    public decrementItemsLoading(): void {
        this.decrementItemsLoadingSource.next();
    }

    constructor() {
    }
}
