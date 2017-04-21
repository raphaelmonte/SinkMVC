import {Broadcast} from "./broadcast";
import {INotification} from "./notification.interface";

export class Command extends Broadcast {

    constructor() {
        super();
    }

    public execute(notification: INotification): void {

    }

}