import {Mediator as SinkMediator} from "sinkmvc";
import {EventEmitter} from '@angular/core';
import {Subscriber} from "rxjs/Rx";

export class Mediator extends SinkMediator {

    private subscribers: Subscriber<any>[];

    constructor() {

        super();

        this.subscribers = [];

    }

    protected subscribe(eventEmitter: EventEmitter<any>, listener: Function): void {

        let subscriber: Subscriber<any> = eventEmitter.subscribe(listener.bind(this));
        this.subscribers.push(subscriber);

    }

    /** @override */
    public removeAllListeners(): void {

        this.subscribers.forEach((subscriber: Subscriber<any>) => subscriber.unsubscribe());

        super.removeAllListeners();

    }

}