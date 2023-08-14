import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from "@angular/forms";
import { AlertifyService } from "src/app/utils/services/alertify.service";
import { AuthService } from 'src/app/utils/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private alertify: AlertifyService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.createForm();
  }

  loginForm!: FormGroup;
  isSubmit: boolean = false;

  ngOnInit(): void {
  }

  get f() {
    return this.loginForm.controls;
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl("", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl("", [Validators.required]),
    });
  }

  save() {
    this.isSubmit = true;
    if (this.loginForm.invalid) {
      this.alertify.error(
        "Error",
        "Please fill in the required fields."
      );
    }
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value)
    }
  }
}
