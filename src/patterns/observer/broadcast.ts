import * as events from "events";

export class Broadcast {

    private eventEmitter: events.EventEmitter;
    public mediators: {
        [mediatorName: string]: {
            [notificationName: string]: Function
        }
    } = {};

    constructor() {

        this.eventEmitter = new events.EventEmitter();

    }

    private getMediator(mediatorName: string): Object {

        if (!this.mediators[mediatorName]) {
            this.mediators[mediatorName] = {};
        }

        return this.mediators[mediatorName];

    }

    public addListener(notificationName: string, listener: Function, mediatorName: string): void {

        let mediator = this.getMediator(mediatorName);
        mediator[notificationName] = listener;

        this.eventEmitter.on(notificationName, listener);

    }

    public sendNotification(notificationName: string, params?: any): void {

        this.eventEmitter.emit(notificationName, params);

    }

    public removeListener(notificationName: string, mediatorName: string): void {

        let mediator = this.getMediator(mediatorName);
        let listener: Function = mediator[notificationName];
        if (listener) {
            this.eventEmitter.removeListener(notificationName, listener);
            delete mediator[notificationName];
        }

    }

    public removeAllListeners(mediatorName: string): void {

        let mediator = this.getMediator(mediatorName);

        for (let notificationName in mediator) {
            let listener = mediator[notificationName];
            this.eventEmitter.removeListener(notificationName, listener);
            delete mediator[notificationName];
        }

    }

}