import {LoginNotifications} from "../../notifications/login.notification";
import {LoginProxy} from "../../models/login.proxy";
import {AuthenticationService} from "../../../../../shared/services/authentication.service";
import {User} from "../../../../../shared/models/user/user.model";
import {Facade, Command} from "node-broadcast";

export class LoginCommand extends Command {

    private proxy: LoginProxy;

    constructor() {
        super();
    }

    public static listNotificationInterests(): string[] {

        return [
            LoginNotifications.SET_SERVICE,
            LoginNotifications.LOGIN
        ];

    }

    //@override
    public execute(): void {

        this.proxy = Facade.getProxy(LoginProxy) as LoginProxy;

        this.addEventListener(LoginNotifications.SET_SERVICE, (authentication: AuthenticationService) => {
            this.proxy.setService(authentication);
        });

        this.addEventListener(LoginNotifications.LOGIN, (user: User) => {
            this.proxy.login(user);
        });

    }

}