import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HttpPublicInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const reqClone = req.clone({
      headers,
    });

    return next.handle(reqClone).pipe(
      catchError((error: HttpErrorResponse) => {
        throw error; // Lanza el error nuevamente
      }),
    );
  }
}
