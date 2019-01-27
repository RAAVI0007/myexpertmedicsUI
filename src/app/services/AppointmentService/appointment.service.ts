import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PatientInfo } from '../../components/appointment/patientinfo';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  baseUrl = environment.baseURL;
  apiPostURL = this.baseUrl + 'appointmentreq/bookapp';
  gitdata: any;


  constructor(private _httpclient: HttpClient) { }


  saveAppointment(article: PatientInfo): Observable<PatientInfo> {
    console.log('Inside the Serivce:::');
    const httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    const options = { headers: httpHeaders };
    return this._httpclient.post<PatientInfo>(this.apiPostURL, article, options);
  }
}
