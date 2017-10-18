import {Facade} from "../facade/facade";
import {INotification} from "../../models/interfaces/notification.interface";
import {ICommand} from "../../models/interfaces/command.interface";

export class Command implements ICommand {

    public static NAME: string;

    public execute(notification?: INotification): any {

    }

    /** @override  */
    public sendNotification(notificationName: string, params?: any): void {

        Facade.sendNotification(notificationName, params, this);

    }

}