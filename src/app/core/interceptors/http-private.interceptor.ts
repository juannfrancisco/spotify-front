import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CONSTANT } from 'src/app/shared/util/constant/constant';

@Injectable({ providedIn: 'root' })
export class HttpPrivateInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = sessionStorage.getItem(CONSTANT.TOKEN_NAME) || '';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
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
