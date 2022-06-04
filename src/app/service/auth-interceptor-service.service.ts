import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

export class AuthInterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('token');

    if (token) {
      console.log('token from the interceptor', token);
      // If we have a token, we set it to the header
      request = request.clone({
        setHeaders: {Authorization: token}
      });
    }

    return next.handle(request).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            // redirect user to the logout page
          }
        }
        return throwError(err);
      })
    )
  }
}
