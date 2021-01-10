import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
    HttpInterceptor, HttpResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, finalize, retry, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import { LoadingPageService } from '../services/loading-page.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private router: Router, private loadingPage: LoadingPageService) {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        this.loadingPage.incrementItemsLoading();
        return next.handle(request)
            .pipe(
                retry(1),
                tap((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        this.loadingPage.setError(false);
                    }
                }),
                catchError((error: HttpErrorResponse) => {
                    let errorMessage = '';
                    if (error.error instanceof ErrorEvent) {
                        // client-side error
                        errorMessage = `Error: ${error.error.message}`;
                    } else {
                        // server-side error
                        errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
                    }
                    this.loadingPage.setError(true);
                    return throwError(errorMessage);
                }),
                finalize(() => {
                    this.loadingPage.decrementItemsLoading();
                })
            );
    }
}
