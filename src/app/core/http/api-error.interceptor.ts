import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const apiErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let clientMessage = 'An unexpected error occurred while loading content.';

      if (error.status === 0) {
        clientMessage = 'Unable to connect to the server. Please check your network connection.';
      } else if (error.status === 404) {
        clientMessage = 'The requested resource could not be found.';
      } else if (error.status >= 500) {
        clientMessage = 'The server encountered an error. Please try again later.';
      }

      console.error(
        `[API Error] ${req.method} ${req.urlWithParams} -> Status ${error.status}: ${error.statusText}`,
      );

      return throwError(() => new Error(clientMessage));
    }),
  );
};
