import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
    HttpInterceptor, HttpResponse
} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError, finalize, retry, tap} from 'rxjs/operators';
import {LoadingPageService} from '../services/loading-page.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    private cache = new Map<string, any>();

    constructor(private loadingPage: LoadingPageService) {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        if (request.method !== 'GET') {
            return next.handle(request).pipe(
                catchError((error: HttpErrorResponse) => {
                    return this.handleError(error);
                })
            );
        }

        const cachedResponse = this.cache.get(request.url);
        if (cachedResponse) {
            return of(cachedResponse);
        }

        this.loadingPage.incrementItemsLoading();
        return next.handle(request)
            .pipe(
                retry(1),
                tap((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        this.loadingPage.setError(false);
                        this.cache.set(request.url, event);
                    }
                }),
                catchError((error: HttpErrorResponse) => {
                    return this.handleError(error);
                }),
                finalize(() => {
                    this.loadingPage.decrementItemsLoading();
                })
            );
    }

    handleError(error: HttpErrorResponse): Observable<never> {
        let errorMessage: string;
        if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;
        } else {
            errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
        }
        this.loadingPage.setError(true);
        return throwError(errorMessage);
    }
}
