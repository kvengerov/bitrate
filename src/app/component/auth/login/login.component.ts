import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
// import {moveIn} from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public hide = true;
  public user$ = this._authService.user;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['',
        [
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z})([a-zA-Z0-9]+)$'),
          Validators.minLength(6),
          Validators.maxLength(12),
          Validators.required
        ]]
    });
  }

  ngOnInit() { }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  loginWithGoogle() {
    this._authService.loginWithGoogle()
      .subscribe(
      success => this._router.navigate(['/']),
      error => alert(error)
      );
  }

  loginWithFacebook() {
    this._authService.loginWithFacebook()
      .subscribe(
        success => this._router.navigate(['/']),
        error => alert(error)
      );
  }

  login() {
    // const inputValue = this.loginForm.value;
    // console.log(inputValue.email, inputValue.password);

    this._authService.login(this.email.value, this.password.value)
      .subscribe(
        success => this._router.navigate(['/']),
        error => alert(error)
      );
  }
}
