import {Facade} from "../facade/facade";

export class Mediator {

    static NAME: string = Facade.createRandomNames('mediator-');

    constructor() {

        this.handleNotification();

    }

    public handleNotification(): void {

    }

    public addListener(notificationName: string, listener: Function): void {

        Facade.addListener(notificationName, listener.bind(this), this.constructor['name']);

    }

    public sendNotification(notificationName: string, params?: any): void {

        Facade.sendNotification(notificationName, params);

    }

    public removeListener(notificationName: string): void {

        Facade.removeListener(notificationName, this.constructor['name']);

    }

    public removeAllListeners(): void {

        Facade.removeAllListeners(this.constructor['name']);

    }

}