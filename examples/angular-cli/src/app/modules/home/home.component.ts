import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})

export class HomeComponent {

    private router: Router;

    constructor(router: Router) {

        this.router = router;

    }

    public logout(): void {

        this.router.navigate(['/']);

    }

}
