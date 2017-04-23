import {Broadcast} from "./broadcast";
import {INotification} from "./notification.interface";
import {Facade} from "./facade";

export class Command extends Broadcast {

    private notificationName: string;
    
    constructor() {
        super();
    }
    
    public setNotificationName(notificationName: string) {
        this.notificationName = notificationName;
    }

    public execute(notification: INotification): void {

    }

    /** @override  */
    public addListener(notificationName: string, listener: Function): void {

        if(notificationName == this.notificationName) {
            Facade.addListener(notificationName, listener.bind(this));    
        }

    }

}