import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../classes/user';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserService {

    baseUrl = environment.baseURL;
    apiPostSignUp = this.baseUrl + 'api/auth/signup';
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`/users`);
    }

    getById(id: number) {
        return this.http.get(`/users/` + id);
    }

    register(user: User) {
        console.log(user.firstname);
        console.log(user.lastname);
        console.log(user.email);
        console.log(user.phone);
        console.log(user.password);
        console.log(user.username);
        return this.http.post(this.apiPostSignUp, user);
    }

    update(user: User) {
        return this.http.put(`/users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`/users/` + id);
    }
}
