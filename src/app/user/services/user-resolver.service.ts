import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class UserResolverService {
  constructor(private userService: UserService) {}
  resolve(): Observable<any> {
    return this.userService.getUsers();
  }
}