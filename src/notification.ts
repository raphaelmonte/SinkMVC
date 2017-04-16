import * as events from "events";

export class Notifications {

    private eventEmitter: events.EventEmitter;
    public notifications: { [notification: string]: Function[] } = {};

    constructor() {

        this.eventEmitter = new events.EventEmitter();

    }

    private getNotification(notification: string): Function[] {

        return this.notifications[notification];

    }

    public addEventListener(notificationName: string, listener: Function): void {

        if(!this.getNotification(notificationName)) {

            this.notifications[notificationName] = [];
            this.notifications[notificationName].push(listener);

        }else {

            this.notifications[notificationName].push(listener);

        }

        this.eventEmitter.on(notificationName, listener);

    }
    
    public sendNotification(notificationName: string, params: any): void {

        this.eventEmitter.emit(notificationName, params);
        
    }
    
    public removeEventListener(notificationName: string): void {

        let listeners: Function[] = this.getNotification(notificationName);
        if(listeners) {
            listeners.forEach((listener: Function) => {
                this.eventEmitter.removeListener(notificationName, listener);
            });
        }

    }

    public removeAllEventListeners(): void {

        this.eventEmitter.removeAllListeners();

    }

}