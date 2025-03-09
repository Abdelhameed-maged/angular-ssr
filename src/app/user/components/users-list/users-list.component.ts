import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../models/users';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-users-list',
  imports: [ CommonModule, RouterLink, ReactiveFormsModule, FormsModule ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  users: User[] = [];
  allUsers: User[] = []; 
    searchInput: FormControl = new FormControl();

    constructor(private route: ActivatedRoute) {}
  
    ngOnInit() {
      this.route.data.subscribe(data => {
        this.users = data['users'];
        this.allUsers = [...data['users']];
      });

      this.searchInput.valueChanges.pipe(
        debounceTime(300), 
        distinctUntilChanged() 
      ).subscribe(searchUser => { 
        console.log('Searching for:', searchUser);
        this.filterUsers(searchUser);
      });
    }

    filterUsers(searchUser: string) {
      if (!searchUser) {
        this.users = [...this.allUsers];
        return;
      }
      
      this.users = this.allUsers.filter(user => 
        user.name.toLowerCase().includes(searchUser.toLowerCase())
      );
    }
}
