import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

import {User} from "../../../../shared/models/user/user.model";
import {LoginService} from "../services/login.service";
import {ILoginService} from "./login-service.interface";

export class LoginProxy implements ILoginService {

    public service: LoginService;

    constructor(service: LoginService) {

        this.service = service;

    }

    public login(user: User): Observable<Object> {

        return this.service.login(user).map((res: any) => res.json());

    }

}