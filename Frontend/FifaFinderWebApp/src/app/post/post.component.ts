import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  currentUser: User;
  constructor(private service: AuthService, private router: Router) {
    this.service.currentUser.subscribe(x => this.currentUser = x);

  }

  ngOnInit(): void { }

  logout() {
    this.service.logoutUser();
    this.router.navigateByUrl('/login');
  }
}
