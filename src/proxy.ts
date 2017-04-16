import {Facade} from "./facade";

export class Proxy {

    constructor() {}

    public sendNotification(notificationName: string, params: any = null): void {

        Facade.sendNotification(notificationName, params);

    }

}