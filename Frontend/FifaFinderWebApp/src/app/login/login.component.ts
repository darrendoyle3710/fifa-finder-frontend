import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  registerForm = new FormGroup({
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('')
  });

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  public loginDisplay: boolean = false;

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  onRegister() {
    var val = { ID: 0, Username: this.registerForm.value.username, Password: this.registerForm.value.password, Email: this.registerForm.value.email };
    console.log(val);
    this.service.registerUser(val).subscribe(response => {
      this.router.navigateByUrl('/posts');
    });

  }

  onLogin() {
    var val = { ID: 0, Username: this.loginForm.value.username, Password: this.loginForm.value.password, Email: "" };
    console.log(val);
    this.service.loginUser(val).subscribe(response => {
      this.router.navigateByUrl('/posts');
    });

  }

}
