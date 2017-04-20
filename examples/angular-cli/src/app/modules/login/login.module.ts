import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Facade} from "node-broadcast";

import {LoginComponent} from "./login.component";
import {LoginRouting} from "./login.routing";
import {LoginCommand} from "../../modules/login/shared/controllers/command/login.command";
import {LoginFormComponent} from "./form/form.component";
import {AuthenticationService} from "../../shared/services/authentication.service";
import {LoginProxy} from "./shared/models/login.proxy";

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

        Facade.registerService(authenticationService);
        Facade.registerCommand(LoginCommand);
        Facade.registerProxy(LoginProxy);

    }
     
}
