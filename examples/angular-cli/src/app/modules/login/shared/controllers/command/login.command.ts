import {Command} from "node-broadcast";

import {LoginNotifications} from "../../notifications/login.notification";
import {LoginProxy} from "../../models/login.proxy";
import {User} from "../../../../../shared/models/user/user.model";

export class LoginCommand extends Command {

    constructor() {
        super();
    }

    /** @override */
    public static listNotificationInterests(): string[] {

        return [
            LoginNotifications.SET_SERVICE,
            LoginNotifications.LOGIN
        ];

    }

    /** @override */
    public execute(): void {

        let proxy: LoginProxy = new LoginProxy();

        this.addListener(LoginNotifications.LOGIN, (user: User) => proxy.login(user));

    }

}