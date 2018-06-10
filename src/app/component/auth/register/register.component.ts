import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { SharedModule } from '../../../shared/shared.module';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public hide = true;
  public user$ = this.auth.user;

  constructor(
    private fB: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fB.group({
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
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }

  register() {
    return this.auth.register(this.email.value, this.password.value)
      .subscribe(
        success => this.router.navigate(['/']),
        error => alert(error)
      );
  }


}
