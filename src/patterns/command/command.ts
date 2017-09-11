import {Facade} from "../facade/facade";
import {INotification} from "../../models/interfaces/notification.interface";
import {ICommand} from "../../models/interfaces/command.interface";
import {Util} from "../util/util";

export class Command implements ICommand {

    static NAME: string;

    constructor() {

        this.constructor['NAME'] = Util.createRandomNames('command-');

    }

    public execute(notification: INotification): void {

    }

    /** @override  */
    public sendNotification(notificationName: string, params?: any): void {

        Facade.sendNotification(notificationName, params);

    }

}