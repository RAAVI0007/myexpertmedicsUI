import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../classes/user';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`/users`);
    }

    getById(id: number) {
        return this.http.get(`/users/` + id);
    }

    register(user: User) {
        console.log(user.firstname) ;
        console.log(user.lastname) ;
        console.log(user.email);
        console.log(user.phone) ;
        console.log(user.password) ;
        console.log(user.username) ;
        return this.http.post('http://localhost:8080/api/auth/signup', user);
    }

    update(user: User) {
        return this.http.put(`/users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`/users/` + id);
    }
}