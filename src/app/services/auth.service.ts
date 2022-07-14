import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUser } from '../model/login-user';
import { NewUser } from '../model/new-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL='http://localhost:8080/auth/';

  constructor(private httpClient :HttpClient) { }

  public newUser(newUser: NewUser): Observable<any>{
    console.log(newUser)
    return this.httpClient.post<any>(this.authURL + 'nuevo', newUser/*, {responseType: "json"}*/);
  }

  public login(loginUser: LoginUser): Observable<any>{
    console.log(loginUser)
    return this.httpClient.post<JwtDto>(this.authURL + 'login',loginUser/*, {responseType: "json"}*/);
  }
}
