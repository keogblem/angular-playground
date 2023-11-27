import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormsComponent } from './pages/forms/forms.component';
import { FormsPredefinedComponent } from './pages/forms-predefined/forms-predefined.component';
import { FormsCustomComponent } from './pages/forms-custom/forms-custom.component';
import { FormsCustomFormComponent } from './pages/forms-custom-form/forms-custom-form.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'forms',
        component: FormsComponent
    },
    {
        path: 'forms/predefined',
        component: FormsPredefinedComponent
    }, {
        path: 'forms/custom',
        component: FormsCustomComponent
    }, {
        path: 'forms/custom/form',
        component: FormsCustomFormComponent
    },
    {
        path: '**',
        redirectTo: '/'
    }
];
