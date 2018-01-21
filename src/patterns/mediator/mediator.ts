import {Facade} from "../facade/facade";
import {Util} from "../util/util";

export class Mediator {

    private NAME: string;

    constructor() {

        this.NAME = Util.createRandomNames('mediator-');

        this.handleNotification();

    }

    public handleNotification(): void {

    }

    public addListener(notificationName: string, listener: Function): void {

        Facade.addListener(notificationName, listener.bind(this), this.NAME);

    }

    public sendNotification(notificationName: string, params?: any): void {

        Facade.sendNotification(notificationName, params, this);

    }

    public removeListener(notificationName: string): void {

        Facade.removeListener(notificationName, this.NAME);

    }

    public removeAllListeners(): void {

        Facade.removeAllListeners(this.NAME);

    }

}