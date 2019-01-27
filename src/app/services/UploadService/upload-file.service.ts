import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  baseUrl = environment.baseURL;
  fileUploadURL = this.baseUrl + 'api/file/upload';
  fileGetURL = this.baseUrl + 'api/file/all';
  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', this.fileUploadURL, formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(this.fileGetURL);
  }
}
