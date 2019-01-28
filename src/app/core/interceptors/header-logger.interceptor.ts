import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { of, Observable, throwError } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeaderLoggerInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return of(null)
      .pipe(
        mergeMap(() => {

          // print the headers from the AuthTokenHeaderAppenderInterceptor
          console.log('Hello world! ');
          console.log('Headers:');
          request.headers.keys().forEach(function (key: string): void {
            console.log(`- ${key}: ${request.headers.get(key)}`);
          });

          // pass to the next handler
          return next.handle(request);
        })
      );
  }
}
