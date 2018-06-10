import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { SharedModule } from '../../../shared/shared.module';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public hide = true;
  public user$ = this.auth.user;

  constructor(
    private fB: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fB.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['',
        [
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z})([a-zA-Z0-9]+)$'),
          Validators.minLength(6),
          Validators.maxLength(12),
        ]
      ]
    });
  }

  ngOnInit() { }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  login() {
    return this.auth.login(this.email.value, this.password.value)
      .subscribe(
        success => this.router.navigate(['/']),
        error => alert(error)
      );
  }
  loginWithGoogle() {
    this.auth.loginWithGoogle()
      .subscribe(
        success => this.router.navigate(['/']),
        error => alert(error)
      );
  }
  loginWithFacebook() {
    this.auth.loginWithFacebook()
      .subscribe(
        success => this.router.navigate(['/']),
        error => alert(error)
      );
  }
}
