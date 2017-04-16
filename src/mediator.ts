import {OnDestroy} from "@angular/core";
import {Facade} from "./facade";

export class Mediator implements OnDestroy {

    private listNotificationInterests: string[];

    constructor() {

        this.listNotificationInterests = [];
        this.handleNotification();

    }

    public handleNotification(): void {

    }

    public addEventListener(notificationName: string, listener: Function): void {

        this.listNotificationInterests.push(notificationName);

        Facade.addEventListener(notificationName, listener);

    }

    public sendNotification(notificationName: string, params: any = null): void {

        Facade.sendNotification(notificationName, params);

    }

    public ngOnDestroy(): void {

        console.log(this.listNotificationInterests);
        this.listNotificationInterests.forEach((notificationName: string) => {
            Facade.removeEventListener(notificationName);
        });

    }

}