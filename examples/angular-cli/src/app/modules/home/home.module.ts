import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./home.component";
import {HomeRouting} from "./home.routing";

@NgModule({
    imports: [
        FormsModule,
        HomeRouting
    ],
    providers: [],
    declarations: [
        HomeComponent
    ],
    exports: []
})

export class HomeModule {

    constructor() {}

}
