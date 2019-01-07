import { DOCUMENT } from '@angular/common';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TomcatService } from './services/Tomcat/tomcat.service';
import * as $ from 'jquery';
import { AuthLoginInfo } from '../app/components/login/login-info';
import { AuthenticationService } from '../app/services/Authentication/authentication.service';
import { TokenStorageService } from '../app/classes/token.storage';
import { UserService } from '../app/services/User/user.service';
import { User } from '../app/classes/user';
import { AlertService } from '../app/services/Alert/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My Medics Expert – Consultation';
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  @ViewChild('stickyMenu') menuElement: ElementRef;
  sticky = false;
  isRegisterShow = true;
  isLoginShow = false;
  elementPosition: any;
  username: string;
  password: string;
  heightD = ['50%'];
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  loginLabel = 'Login';
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;
  signupInfo: User;
  isSignedUp = false;
  isSignUpFailed = false;

  images = ['https://serving.photos.photobox.com/34156944745394a28ce5b0df584c8ce84cf0eeb36cb368813a415fb0ad4b4ec8c698430b.jpg'];

  constructor(private authService: AuthenticationService, private userService: UserService,
    private alertService: AlertService, private tokenStorage: TokenStorageService, private router: Router, ) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  /*getData(): void {
    this.gitdata = this._tomcatservice.getData().subscribe((response) => {
      this.gitdata = response;
      console.log('data recieved' + JSON.stringify(response));
    });*/
  /*getData(): void {
     this._httpclient.get(this.apiURL).subscribe((response) => {
      this.gitdata = response;
      console.log('data recieved'+JSON.stringify(response));
    });

  }*/

  // tslint:disable-next-line:use-life-cycle-interface
  /*ngAfterViewInit() {
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }*/

  /*login() {
    console.log(this.username) ;
    console.log(this.password);
    this.authenticationService.attemptAuth(this.username, this.password).subscribe(
    data => {
      this.token.saveToken(data.token);
      console.log('data.token>>' + data.token );
      this.router.navigate(['user']);
    }
  );
  }*/
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    $(function () {
      $(document).scroll(function () {
        const $nav = $('.navbar-fixed-top');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
    });
  }

  onLoginSubmit() {
    alert('hello' + this.form.username);
    console.log(this.form.username);

    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.loginLabel = this.form.username;
        this.roles = this.tokenStorage.getAuthorities();
        this.isLoginShow = true;
        //this.reloadPage();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
  showRegister(): void {
    this.isRegisterShow = !this.isRegisterShow;
    this.isLoginShow = !this.isLoginShow;
  }

  showLogin(): void {
    this.isRegisterShow = !this.isRegisterShow;
    this.isLoginShow = !this.isLoginShow;
  }

  onRegSubmit() {
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
        this.showLogin();
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

  logout() {
    this.tokenStorage.signOut();
    this.isLoggedIn = true;
    window.location.reload();
  }
}
