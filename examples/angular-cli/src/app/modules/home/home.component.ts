import {Component} from "@angular/core";
import {Router} from "@angular/router";

import {ViewController} from "../../shared/base/view-controller";

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})

export class HomeComponent extends ViewController {

    private router: Router;

    constructor(router: Router) {

        super();
        this.router = router;

    }

    public logout(): void {

        this.router.navigate(['/']);

    }

}
