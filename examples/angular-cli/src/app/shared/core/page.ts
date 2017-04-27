import {IMediator} from "sinkmvc";
import {OnDestroy} from "@angular/core";

export class Page implements OnDestroy {

    protected mediators: IMediator[];

    constructor() {

        this.mediators = [];

    }

    public addMediator(mediator): void {

        this.mediators.push(mediator);

    }

    public getMediator(mediatorClassRef: any): IMediator {

        let i: number;
        let length: number = this.mediators.length;

        for(i = 0 ; i < length ; i++) {
            if(this.mediators[i] instanceof mediatorClassRef) {
                return this.mediators[i];
            }
        }

        return null;

    }

    public ngOnDestroy(): void {

        this.mediators.forEach((mediator) => mediator.removeAllListeners());

    }

}