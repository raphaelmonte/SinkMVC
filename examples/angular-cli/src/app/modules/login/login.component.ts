import {Component} from "@angular/core";
import {Router} from "@angular/router";

import {LoginNotifications} from "./shared/notifications/login.notification";
import {User} from "../../shared/models/user/user.model";
import {AuthenticationService} from "../../shared/services/authentication.service";
import {ViewController} from "../../shared/base/view-controller";

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})

export class LoginComponent extends ViewController {

    private user: User;
    private router: Router;

    constructor(authenticationService: AuthenticationService, router: Router) {

        super();

        this.router = router;
        this.user = new User();

        this.sendNotification(LoginNotifications.SET_SERVICE, authenticationService);

    }

    //@override
    public handleNotification(): void {

        this.addEventListener(LoginNotifications.SUCCESS_LOGIN, this.onSuccessLogin);
        this.addEventListener(LoginNotifications.FAILURE_LOGIN, this.onFailureLogin);
        
    }

    private onSuccessLogin(): void {

        console.log('onSuccessLogin');
        this.router.navigate(['/home']);
        
    }
    
    private onFailureLogin(): void {

        //TODO: show message failure login

    }

    public login(): void {

        this.sendNotification(LoginNotifications.LOGIN, this.user);

    }

}
