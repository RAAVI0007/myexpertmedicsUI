export class User {
    id: number;
    username: string;
    phone: string;
    password: string;
    firstname: string;
    email: string;
    role: string[];
    name: string;
    lastname: string;

    constructor(firstname: string, lastname: string, username: string, phone: string, email: string, password: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.phone = phone ;
        this.email = email;
        this.password = password;
        this.role = ['user'];
    }
}
