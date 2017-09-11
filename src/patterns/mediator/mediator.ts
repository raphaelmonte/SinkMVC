import {Facade} from "../facade/facade";
import {Util} from "../util/util";

export class Mediator {

    static NAME: string;

    constructor() {

        this.constructor['NAME'] = Util.createRandomNames('mediator-');

        this.handleNotification();

    }

    public handleNotification(): void {

    }

    public addListener(notificationName: string, listener: Function): void {

        Facade.addListener(notificationName, listener.bind(this), this.constructor['NAME']);

    }

    public sendNotification(notificationName: string, params?: any): void {

        Facade.sendNotification(notificationName, params, this);

    }

    public removeListener(notificationName: string): void {

        Facade.removeListener(notificationName, this.constructor['NAME']);

    }

    public removeAllListeners(): void {

        Facade.removeAllListeners(this.constructor['NAME']);

    }

}