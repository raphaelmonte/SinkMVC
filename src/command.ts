import {Facade} from "./facade";

export class Command {

    private nofiticationName: string;
    
    constructor() {}

    public static listNotificationInterests(): string[] {

        return [];

    }

    public setNotificationName(nofiticationName: string): void {

        this.nofiticationName = nofiticationName;

    }
    
    public execute(): void {

    }

    public addEventListener(nofiticationName: string, listener: Function): void {

        if(this.nofiticationName == nofiticationName) {

            Facade.addEventListener(nofiticationName, listener);
            
        }
        
    }

    public sendNotification(notification: string, params: any): void {

        Facade.sendNotification(notification, params);

    }

}