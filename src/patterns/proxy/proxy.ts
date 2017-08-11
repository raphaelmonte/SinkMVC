import {Facade} from "../facade/facade";

export class Proxy {

    public static NAME: string = Facade.createRandomNames('proxy-');

    public sendNotification(notificationName: string, params?: any): void {

        Facade.sendNotification(notificationName, params);

    }

}