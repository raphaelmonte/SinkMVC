import {Mediator} from "node-broadcast";
import {OnDestroy} from "@angular/core/core";

export class ViewController extends Mediator implements OnDestroy {

    constructor() {
        super();
    }

    public ngOnDestroy() {
        this.removeAllListeners();
    }

}