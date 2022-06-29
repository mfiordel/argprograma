import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { person } from '../components/model/person.model';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
  URL = 'http://localhost:8080/person/'
  URLJSON = '../assets/data/data.json'

  constructor(private http:HttpClient) { }

  public getData(): Observable<person>{
    
    return this.http.get<person>(this.URL+'get/profile');
  }

  /*JSON
  public getData(): Observable<any>{
    return this.http.get(this.URLJSON)
  }
  */

}
