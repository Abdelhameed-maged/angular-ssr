import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserResolverService } from './services/user-resolver.service';
import { UserDetailsResolverService } from './services/user-details-resolver.service';

const routes: Routes = [
  {path: '', component: UsersListComponent, resolve: {users: UserResolverService}},
  {path: ':id', component: UserDetailsComponent, resolve: {users: UserDetailsResolverService}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
