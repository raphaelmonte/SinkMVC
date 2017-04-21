import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Facade} from "node-broadcast";

import {LoginComponent} from "./login.component";
import {LoginRouting} from "./login.routing";
import {LoginCommand} from "../../modules/login/shared/controllers/command/login.command";
import {LoginFormComponent} from "./form/form.component";
import {AuthenticationService} from "../../shared/services/authentication.service";
import {LoginProxy} from "./shared/models/login.proxy";
import {LoginNotifications} from "./shared/notifications/login.notification";

@NgModule({
    imports: [
        FormsModule,
        LoginRouting
    ],
    providers: [],
    declarations: [
        LoginComponent,
        LoginFormComponent
    ],
    exports: []
})

export class LoginModule {

    constructor(authenticationService: AuthenticationService) {

        //register services
        Facade.registerService(authenticationService);

        //register proxies
        Facade.registerProxy(LoginProxy);

        //register commands
        Facade.registerCommand(LoginNotifications.LOGIN, LoginCommand);

    }
     
}
