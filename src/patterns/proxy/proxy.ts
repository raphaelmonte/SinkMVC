import {Facade} from "../facade/facade";
import {Util} from "../util/util";

export class Proxy {

    public static NAME: string = Util.createRandomNames('proxy-');

    public sendNotification(notificationName: string, params?: any): void {

        Facade.sendNotification(notificationName, params, this);

    }

}