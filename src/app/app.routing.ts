import {DatepickerSampleComponent} from './datepicker-sample/datepicker-sample.component';
import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const APP_ROUTES: Routes = [
    { path: '**', component: DatepickerSampleComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
