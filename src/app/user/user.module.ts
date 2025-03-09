import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserService } from './services/user.service';
import { UserResolverService } from './services/user-resolver.service';
import { UserDetailsResolverService } from './services/user-details-resolver.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers: [UserService, UserResolverService, UserDetailsResolverService]
})
export class UserModule { }
