import {Observable} from "rxjs";
import 'rxjs/Rx';
import {Facade, Proxy} from "node-broadcast";

import {User} from "../../../../shared/models/user/user.model";
import {LoginNotifications} from "../notifications/login.notification";
import {AuthenticationService} from "../../../../shared/services/authentication.service";
import {UserFactory} from "../../../../shared/models/user/user.factory";

export class LoginProxy extends Proxy {

    public service: AuthenticationService;

    constructor() {

        super();

        this.service = Facade.getService(AuthenticationService);

    }

    public login(user: User): void {

        try {

            let observer: Observable<any> = this.service.login(user)['map']((res: any) => res.json());
            observer.subscribe(
                (response: Object) => this.sendNotification(LoginNotifications.SUCCESS_LOGIN, UserFactory.createUser(response)),
                (response: Object) => this.sendNotification(LoginNotifications.FAILURE_LOGIN, response)
            );

        }catch(e) {

            console.error(e);
            this.sendNotification(LoginNotifications.FAILURE_LOGIN, e);

        }

    }

}