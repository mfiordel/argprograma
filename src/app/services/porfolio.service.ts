import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experience } from '../model/experience.model';
import { person } from '../model/person.model';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
  URL = 'http://localhost:8080/person/'
  URL2 = 'http://localhost:8080/experience/get/'
  URLJSON = '../assets/data/data.json'

  constructor(private http:HttpClient) { }

  public getData(): Observable<person>{
    
    return this.http.get<person>(this.URL+'get/profile');
  }

  public getExperience(): Observable<experience>{
    return this.http.get<experience>(this.URL2)
  }

  /*JSON
  public getData(): Observable<any>{
    return this.http.get(this.URLJSON)
  }
  */

}
