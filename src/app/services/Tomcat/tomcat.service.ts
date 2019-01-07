import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PatientInfo } from '../../components/appointment/patientinfo';

@Injectable({
  providedIn: 'root'
})
export class TomcatService {

  apiURL = 'https://localhost:8443/users/all';
  apiPostURL = 'http://localhost:8080/users/1';
  gitdata: any;


  constructor(private _httpclient: HttpClient) { }

  getData(): Observable<any> {
    return this._httpclient.get(this.apiURL);
  }

  saveAppointment(article: PatientInfo): Observable<PatientInfo> {
    console.log('Inside the Serivce:::');
    const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const options = { headers: httpHeaders };
    return this._httpclient.post<PatientInfo>(this.apiPostURL, article, options) ;
  }
}
