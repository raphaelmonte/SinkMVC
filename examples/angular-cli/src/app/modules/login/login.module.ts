import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Facade} from "node-broadcast";

import {LoginComponent} from "./login.component";
import {LoginRouting} from "./login.routing";
import {LoginCommand} from "../../modules/login/shared/controllers/command/login.command";

@NgModule({
    imports: [
        FormsModule,
        LoginRouting
    ],
    providers: [],
    declarations: [
        LoginComponent
    ],
    exports: []
})

export class LoginModule {

    constructor() {

        Facade.registerCommand(LoginCommand);

    }
     
}
