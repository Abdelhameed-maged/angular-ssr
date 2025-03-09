import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/users';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  user!: User;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['users'];
    });
  }
}
