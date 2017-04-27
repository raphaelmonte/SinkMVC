import {BrowserModule} from "@angular/platform-browser";
import {NgModule, LOCALE_ID} from "@angular/core";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {LoginModule} from "../pages/login/login.module";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,

        LoginModule,
        AppRoutingModule
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: "pt-BR"
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule {

    constructor() {}

}