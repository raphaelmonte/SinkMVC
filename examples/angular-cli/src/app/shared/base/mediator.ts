import {Mediator as NodeBroadcastMediator} from "node-broadcast";
import {EventEmitter} from '@angular/core';
import {Subscriber} from "rxjs/Rx";

export class Mediator extends NodeBroadcastMediator {

    private subscribers: Subscriber<any>[];

    constructor() {

        super();

        this.subscribers = [];

    }

    public subscribe(eventEmitter: EventEmitter<any>, listener: Function): void {

        let subscriber: Subscriber<any> = eventEmitter.subscribe(listener.bind(this));
        this.subscribers.push(subscriber);

    }

    /** @override */
    public removeAllListeners(): void {

        this.subscribers.forEach((subscriber: Subscriber<any>) => subscriber.unsubscribe());

        super.removeAllListeners();

    }
    
}