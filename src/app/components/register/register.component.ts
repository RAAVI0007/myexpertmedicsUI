import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../../services/Alert/alert.service';
import { AuthenticationService } from '../../services/Authentication/authentication.service';
import { UserService } from '../../services/User/user.service';
import { User } from '../../classes/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  /*form: any = {};
  user: User;
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    console.log('>>>>>>' + this.form.name);
    this.submitted = true;

    this.user = new User(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password
    ) ;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          console.log(error);
          this.loading = false;
        });
  }*/


  form: any = {};
  signupInfo: User;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) { }

  ngOnInit() { }

  onSubmit() {
    console.log(this.form);

      this.signupInfo = new User(
      this.form.firstname,
      this.form.lastname,
      this.form.username,
      this.form.phone,
      this.form.email,
      this.form.password);

    this.userService.register(this.signupInfo).subscribe(
      data => {
        this.alertService.success('Registration successful', true);
        alert('Registration successful');
        this.router.navigate(['/login']);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
