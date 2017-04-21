import {Command, ICommand, Facade, INotification} from "node-broadcast";
import {LoginProxy} from "../../models/login.proxy";

export class LoginCommand extends Command implements ICommand {

    constructor() {
        super();
    }

    /** @override */
    public execute(notification: INotification): void {

        let proxy: LoginProxy = Facade.getProxy(LoginProxy) as LoginProxy;
        proxy.login(notification.getBody());

    }

}