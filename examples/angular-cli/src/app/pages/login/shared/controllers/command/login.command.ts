import {Command, ICommand, Facade, INotification} from "sinkmvc";
import {LoginProxy} from "../../models/login.proxy";
import {Observable} from "rxjs/Rx";
import {UserFactory} from "../../../../../shared/models/user/user.factory";
import {LoginNotifications} from "../../notifications/login.notification";

/** Command single actions */
export class LoginCommand extends Command implements ICommand {

    constructor() {
        super();
    }

    /** @override */
    public execute(notification: INotification): void {

        try {

            let proxy: LoginProxy = Facade.getProxy(LoginProxy) as LoginProxy;
            let observable: Observable<Object> = proxy.login(notification.getBody());
            observable.subscribe((response: Object) => this.onSuccessLogin(response),
                                 (response: Object) => this.onFailureLogin(response));

        }catch(e) {

            console.error(e);

            this.sendNotification(LoginNotifications.FAILURE_LOGIN);

        }

    }

    private onSuccessLogin(response: Object): void {

        let userFactory: UserFactory = new UserFactory();
        userFactory.createUser(response);

        this.sendNotification(LoginNotifications.SUCCESS_LOGIN);

    }

    private onFailureLogin(response?: Object): void {
        
        this.sendNotification(LoginNotifications.FAILURE_LOGIN, response);

    }

}