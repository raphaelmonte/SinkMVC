import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {Proxy} from "node-broadcast";

import {User} from "../../../../shared/models/user/user.model";
import {LoginNotifications} from "../notifications/login.notification";
import {AuthenticationService} from "../../../../shared/services/authentication.service";

// import {map} from "rxjs/operator/map";

export class LoginProxy extends Proxy {

    public service: AuthenticationService;

    constructor() {
        super();
    }

    public setService(service: AuthenticationService): void {

        this.service = service;

    }

    public login(user: User): void {

        try {

            let observer: Observable<Object> = this.service.login(user)['map']((res: any) => { return res.json() });
            observer.subscribe((response: Object) => this.onLogin(response),
                               (response: Object) => this.sendNotification(LoginNotifications.FAILURE_LOGIN, response));

        }catch(e) {

            console.error(e);
            this.sendNotification(LoginNotifications.FAILURE_LOGIN, e);

        }

    }

    private onLogin(response: Object): void {

        let user: User = new User(response);
        this.sendNotification(LoginNotifications.SUCCESS_LOGIN, user);

    }

}