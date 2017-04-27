import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

export const HomeRouting: ModuleWithProviders = RouterModule.forChild(routes);