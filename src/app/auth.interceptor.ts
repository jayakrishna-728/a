import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Assume we have a method to get the token from storage or a service
    const token = localStorage.getItem('auth_token');

    // If we have a token, clone the request and add the Authorization header
    if (token) {
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      // Pass the cloned request with the new header to the next handler
      return next.handle(clonedRequest);
    }

    // If no token, just forward the request as is
    return next.handle(req);
  }
}
