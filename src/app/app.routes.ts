import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    {path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
];
