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
  public user$ = this._auth.user;

  constructor(
    private _fB: FormBuilder,
    private _auth: AuthService,
    private _router: Router
  ) {
    this.loginForm = this._fB.group({
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
    return this._auth.login(this.email.value, this.password.value)
      // .then(user => {
      //   if(this.loginForm.valid) [
      //     this._router.navigate(['/'])
      //   ]
      // });
      .subscribe(
        success => this._router.navigate(['/']),
        error => alert(error)
      );
  }


  loginWithGoogle() {
    this._auth.loginWithGoogle()
      .subscribe(
        success => this._router.navigate(['/']),
        error => alert(error)
      );
  }

  loginWithFacebook() {
    this._auth.loginWithFacebook()
      .subscribe(
        success => this._router.navigate(['/']),
        error => alert(error)
      );
  }
}
