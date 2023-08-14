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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private alertify: AlertifyService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.createForm();
  }

  registerForm!: FormGroup;
  isSubmit: boolean = false;

  ngOnInit(): void {
  }

  get f() {
    return this.registerForm.controls;
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl("", [Validators.required]),
    });
  }

  save() {
    this.isSubmit = true;
    if (this.registerForm.invalid) {
      this.alertify.error(
        "Error",
        "Please fill in the required fields."
      );
    }
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value)
    }
  }
}
