import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Facade} from "sinkmvc";

import {LoginComponent} from "./login.component";
import {LoginRouting} from "./login.routing";
import {LoginCommand} from "..//login/shared/controllers/command/login.command";
import {LoginFormComponent} from "./form/login-form.component";
import {LoginProxy} from "./shared/models/login.proxy";
import {LoginNotifications} from "./shared/notifications/login.notification";
import {LoginService} from "./shared/services/login.service";

@NgModule({
    imports: [
        FormsModule,
        LoginRouting
    ],
    providers: [LoginService],
    declarations: [
        LoginComponent,
        LoginFormComponent
    ],
    exports: []
})

export class LoginModule {

    constructor(loginService: LoginService) {

        //register proxies
        Facade.registerProxy(LoginProxy, loginService);

        //register commands
        Facade.registerCommand(LoginNotifications.LOGIN, LoginCommand);

    }
     
}
