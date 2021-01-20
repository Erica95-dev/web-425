/**
 * Title: app.routing.ts
 * Author: Erica Perry
 * Date: 18 Jan 2021
 * Description: Routing file
 */

import { SignInComponent } from './sign-in/sign-in.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes = [
    {
        path: '',
        component: SignInComponent
    },
    {
      path: 'home',
      component: HomeComponent
    }
]