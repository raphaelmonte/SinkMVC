import {Facade} from "./facade";

export class Command {

    private notificationName: string;
    
    constructor() {}

    public static listNotificationInterests(): string[] {

        return [];

    }

    public setNotificationName(notificationName: string): void {

        this.notificationName = notificationName;

    }
    
    public execute(): void {

    }

    public addEventListener(notificationName: string, listener: Function): void {

        if(this.notificationName == notificationName) {

            Facade.addEventListener(notificationName, listener.bind(this));

        }
        
    }

    public sendNotification(notificationName: string, params: any): void {

        Facade.sendNotification(notificationName, params);

    }

}