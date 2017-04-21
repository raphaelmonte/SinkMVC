import {IMediator} from "node-broadcast";
import {Mediator} from "../../../../shared/base/mediator";

import {LoginNotifications} from "../notifications/login.notification";
import {LoginFormComponent} from "../../form/form.component";

export class LoginMediator extends Mediator implements IMediator {

    private loginFormComponent: LoginFormComponent;

    constructor(loginFormComponent: LoginFormComponent) {
        
        super();

        this.loginFormComponent = loginFormComponent;

        this.subscribe(loginFormComponent.onLogin, this.onLogin);
        
    }

    private onLogin(): void {

        this.sendNotification(LoginNotifications.LOGIN);

    }

    /** @override */
    public handleNotification(): void {

        this.addListener(LoginNotifications.SUCCESS_LOGIN, this.onSuccessLogin);
        this.addListener(LoginNotifications.FAILURE_LOGIN, this.onFailureLogin);
    
    }

    private onSuccessLogin(): void {

        // this.loginFormComponent.usuario.id_usuario
        console.log('onSuccessLogin');
        //TODO: onSuccessLogin

    }
    
    private onFailureLogin(): void {

        //TODO: onFailureLogin

    }
    
}