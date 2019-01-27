import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { AuthLoginInfo } from '../../components/login/login-info';
import { JwtResponse } from '../../services/LoginService/jwt-response';
import { environment } from '../../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthenticationService {

    baseUrl = environment.baseURL;
    apiPostSignIn = this.baseUrl + 'api/auth/signin';
    constructor(private http: HttpClient) { }

    /*login(username: string, password: string) {
        return this.http.post<any>(`http://localhost:8090/token/users/authenticate`, { username: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }*/

    /*attemptAuth(ussername: string, password: string): Observable<any> {
        const credentials = {username: ussername, password: password};
        console.log('attempAuth ::' + credentials.username);
        return this.http.post<any>('http://localhost:8080/api/auth/signin', credentials, httpOptions);
      }*/
    attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
        return this.http.post<JwtResponse>(this.apiPostSignIn, credentials, httpOptions);
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
