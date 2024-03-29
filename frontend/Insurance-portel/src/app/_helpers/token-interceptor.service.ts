import { Injectable } from '@angular/core';
import {HttpInterceptor,HttpRequest,HttpHandler,HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable()
export class TokenInterceptorService  implements HttpInterceptor {
  

  constructor() {
   }

  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let currentUser = localStorage.getItem('currentUser');
   
    if (currentUser) {
        request = request.clone({
            setHeaders: { 
                Authorization: `Bearer ${currentUser}`
                
            }
        });
    }

    return next.handle(request);
}
}
