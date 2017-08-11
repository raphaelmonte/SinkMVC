import {Facade} from "../facade/facade";
import {INotification} from "../../models/interfaces/notification.interface";
import {ICommand} from "../../models/interfaces/command.interface";

export class Command implements ICommand {

    static NAME: string = Facade.createRandomNames('command-');

    public execute(notification: INotification): void {}

    /** @override  */
    public sendNotification(notificationName: string, params?: any): void {

        Facade.sendNotification(notificationName, params);

    }

}