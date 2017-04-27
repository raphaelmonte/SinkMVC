import {User} from "../models/user/user.model";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthenticationService {

    constructor() {}

    public setSessionUser(user: User): void {

        let storage: string = JSON.stringify(user);
        localStorage.setItem('sinkmvc-user', storage);

    }

    public getSessionUser(): User {

        let storage: string = localStorage.getItem("sinkmvc-user");
        let data: Object = JSON.parse(storage);
        let user: User = new User(data);

        return user;

    }

    public setToken(token: string): void {

        sessionStorage.setItem('sinkmvc-token', token);

    }

    public getToken(): string {

        let token: string = sessionStorage.getItem('sinkmvc-token');
        return token;

    }

    public logout(): void {

        localStorage.clear();
        sessionStorage.clear();

    }

}