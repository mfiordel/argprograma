import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience.model';
import { person } from '../model/person.model';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
  URL = 'https://still-reef-05361.herokuapp.com/api/person/'
  URL2 = 'https://still-reef-05361.herokuapp.com/api/experience/'
  URLJSON = '../assets/data/data.json'

  constructor(public http: HttpClient) { }

  public getData(): Observable<person> {
    return this.http.get<person>(this.URL + 'get/profile');
  }
  public getExperience(): Observable<Experience> {
    return this.http.get<Experience>(this.URL2 + 'get')
  }
  public createExperience(experience: Experience): Observable<any> {
    window.location.reload();
    return this.http.post<any>(this.URL2 + 'create', experience)
  }
  public deleteExperience(idExp: number): Observable<any> {
    return this.http.delete<any>(this.URL2 + 'delete/' + idExp);
  }
  public editExperience(idExp: number, name_school: any): Observable<any> {
    return this.http.put<any>(this.URL2 + 'editName/' +
      idExp +
      "?name_school=" +
      name_school, name_school);
  }
  public editDescriptionExperience(idExp: number, description: any): Observable<any> {
    return this.http.put<any>(this.URL2 + 'editDescription/' +
      idExp +
      "?description=" +
      description, description);
  }
  public editInitialDateExperience(idExp: number, initial_date: any): Observable<any> {
    return this.http.put<any>(this.URL2 + 'editInitialDate/' +
      idExp +
      "?initial_date=" +
      initial_date, initial_date);
  }
  public editEndDateExperience(idExp: number, end_date: any): Observable<any> {
    return this.http.put<any>(this.URL2 + 'editEndDate/' +
      idExp +
      "?end_date=" +
      end_date, end_date);
  }
  public editUrlImgExperience(idExp: number, url_img: any, style: any): Observable<any> {
    return this.http.put<any>(this.URL2 + 'editUrlImg/' +
      idExp +
      "?url_img=" +
      url_img +
      "&style=" +
      style,
      url_img, style);
  }

  /*JSON*/
  
  public getLocalData(): Observable<any>{
    return this.http.get(this.URLJSON)
  }

}
