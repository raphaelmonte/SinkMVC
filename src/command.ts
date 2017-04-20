import {Facade} from "./facade";
import {Broadcast} from "./broadcast";

export class Command extends Broadcast {

    private notificationName: string;
    
    constructor() {
        super();
    }

    public static listNotificationInterests(): string[] {

        return [];

    }

    public execute(): void {

    }

    public setNotificationName(notificationName: string): void {

        this.notificationName = notificationName;

    }

    /** override */
    public addListener(notificationName: string, listener: Function): void {

        if(this.notificationName == notificationName) {

            Facade.addListener(notificationName, listener.bind(this));

        }
        
    }

}