import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { of, Observable, throwError } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenHeaderAppenderInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return of(null)
      .pipe(
        mergeMap(() => {

          // return throwError({ error: { message: 'Not found' } });

          const authToken = this.authService.getAuthToken();

          if (authToken) {
            request = request.clone({
              setHeaders: {
                Authorization: `Bearer ${authToken}`
              }
            });
          }

          // pass to the next handler
          return next.handle(request);
        })
      );
  }
}
