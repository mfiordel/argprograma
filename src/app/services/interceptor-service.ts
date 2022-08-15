import { HttpEvent, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { finalize, Observable } from "rxjs";
import { TokenService } from "./token.service";
import { SpinnerService } from "./spinner.service";

@Injectable({
    providedIn: 'root'
})
export class InterceptorService {
    constructor(private tokenService: TokenService, private spinnerSvc: SpinnerService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        let intReq = req;
        this.spinnerSvc.show();
        const token = this.tokenService.getToken();
        if (token != null){
            intReq = req.clone({
                headers: req.headers.set('Authorization','Bearer'+token)
            });
        }
        
        return next.handle(intReq).pipe(
            finalize(()=> this.spinnerSvc.hide())
           );
    }
}

export const interceptorProvider = [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
}];
