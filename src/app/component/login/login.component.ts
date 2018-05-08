import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  login() {
    const inputValue = this.form.value;
    console.log(inputValue.email, inputValue.password);

    // this.authService.login(inputValue.email, inputValue.password)
    //   .subcribe(
    //     success => //navigate,
    //     error => alert(error)
    //   )
  }

}