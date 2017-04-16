import {Facade} from "./facade";

export class Mediator {

    private listeners: string[];

    constructor() {

        this.listeners = [];
        this.handleNotification();

    }

    public handleNotification(): void {

    }

    public addEventListener(notificationName: string, listener: Function): void {

        this.listeners.push(notificationName);

        Facade.addEventListener(notificationName, listener.bind(this));

    }

    public sendNotification(notificationName: string, params: any = null): void {

        Facade.sendNotification(notificationName, params);

    }

    public removeAllListeners(): void {

        this.listeners.forEach((notificationName: string) => {
            Facade.removeEventListener(notificationName);
        });

    }

}