import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { catchError, Observable, throwError, BehaviorSubject, switchMap, filter, take } from 'rxjs';
import { AuthService } from './auth.service';
import { LoginService } from './login.service';
import { SigninService } from './signin.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private inject: Injector) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let AuthService = this.inject.get(LoginService);
    let authreq = request;
    authreq = this.AddTokenheader(request, AuthService.GetToken());
    return next.handle(authreq).pipe(
      catchError(errordata => {
        if (errordata.status === 401) {
          //need to implement log out
          AuthService.Logout();
          //refresh token logic
        }
        return throwError(errordata)
      })
    )
  }

  handleRefreshToken(request: HttpRequest<any>, next: HttpHandler){

  }

  AddTokenheader(request: HttpRequest<any>, token: any) {
    return request.clone({ headers: request.headers.set('Authorization', 'bearer ' + token) })
  };
  

}
