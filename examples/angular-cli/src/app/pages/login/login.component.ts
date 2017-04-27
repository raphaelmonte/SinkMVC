import {Component, ViewChild} from "@angular/core";
import {LoginMediator} from "./shared/mediators/login.mediator";
import {LoginFormComponent} from "./form/login-form.component";
import {Page} from "../../shared/core/page";

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})

export class LoginComponent extends Page {

    @ViewChild(LoginFormComponent) loginFormComponent: LoginFormComponent;

    constructor() {

        super();
        
    }
    
    public ngOnInit(): void {

        let loginMediator: LoginMediator = new LoginMediator(this.loginFormComponent);

        this.addMediator(loginMediator);

    }

}
