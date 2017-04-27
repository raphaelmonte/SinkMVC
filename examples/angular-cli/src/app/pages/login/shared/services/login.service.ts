import {Http} from '@angular/http';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {User} from "../../../../shared/models/user/user.model";
import {ILoginService} from "../models/login-service.interface";

@Injectable()
export class LoginService implements ILoginService {

    private http: Http;

    constructor(http: Http) {

        this.http = http;

    }
    
    public login(user: User): Observable<Object> {

        //TODO: login with user
        return this.http.get('assets/data/user.json');

    }

}

