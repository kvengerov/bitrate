import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Router} from '@angular/router';
import {AuthService} from '../../../service/auth.service';
// import {moveIn} from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // animations: [moveIn()],
  // host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public user$ = this.authService.user;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle()
      .subscribe(
      success => this.router.navigate(['/']),
      error => alert(error)
      );
  }

  loginWithFacebook() {
    this.authService.loginWithFacebook()
      .subscribe(
        success => this.router.navigate(['/']),
        error => alert(error)
      );
  }

  login() {
    const inputValue = this.form.value;
    console.log(inputValue.email, inputValue.password);

    this.authService.login(inputValue.email, inputValue.password)
      .subscribe(
        success => this.router.navigate(['/']),
        error => alert(error)
      );
  }

}
