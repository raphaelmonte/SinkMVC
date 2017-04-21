import {Component, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'login-form',
    templateUrl: 'form.component.html',
    styleUrls: ['form.component.scss']
})

export class LoginFormComponent {

    @Output() onLogin: EventEmitter<null>;
    
    public usuario: any = { id_usuario: 1};

    constructor() {

        this.onLogin = new EventEmitter<null>();

    }

    public login(): void {

        this.onLogin.emit();

    }

}
