import {Command, ICommand, Facade, INotification} from "node-broadcast";
import {LoginProxy} from "../../models/login.proxy";
import {LoginNotifications} from "../../notifications/login.notification";

/** Command single actions */
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

/** Command multiple actions */
// export class LoginCommand extends Command implements ICommand {
//
//     constructor() {
//         super();
//     }
//
//     /** @override */
//     public execute(notification: INotification): void {
//
//         this.addListener(LoginNotifications.LOGIN, () => this.login(notification));
//         this.addListener(LoginNotifications.LOGOUT, () => this.logout(notification));
//
//     }
//
//     private login(notification: INotification) {
//
//         let proxy: LoginProxy = Facade.getProxy(LoginProxy) as LoginProxy;
//         proxy.login(notification.getBody());
//
//     }
//
//     private logout(notification: INotification): void {
//
//          //TODO: logout action
//
//     }
//
// }