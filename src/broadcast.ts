import {Facade} from "./facade";

export class Broadcast {

    private listeners: string[];

    constructor() {

        this.listeners = [];
        this.handleNotification();

    }

    public handleNotification(): void {

    }

    public addListener(notificationName: string, listener: Function): void {

        this.listeners.push(notificationName);

        Facade.addListener(notificationName, listener.bind(this));

    }

    public sendNotification(notificationName: string, params: any = null): void {

        Facade.sendNotification(notificationName, params);

    }

    public removeAllListeners(): void {

        this.listeners.forEach((notificationName: string) => {
            Facade.removeListener(notificationName);
        });

    }

}