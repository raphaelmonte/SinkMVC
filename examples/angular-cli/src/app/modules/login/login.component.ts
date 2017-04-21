import {Component, ViewChild} from "@angular/core";
import {LoginMediator} from "./shared/mediators/login.mediator";
import {LoginFormComponent} from "./form/form.component";

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})

export class LoginComponent {

    private loginMediator: LoginMediator;

    @ViewChild(LoginFormComponent) loginFormComponent: LoginFormComponent;

    constructor() {}
    
    public ngOnInit(): void {

        this.loginMediator = new LoginMediator(this.loginFormComponent);

    }

    public ngOnDestroy(): void {

        this.loginMediator.removeAllListeners();

    }

}
