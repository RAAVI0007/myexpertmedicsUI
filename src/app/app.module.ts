import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientdataComponent } from './components/patientdata/patientdata.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { MatButtonModule, MatCardModule, MatExpansionModule, MatIconModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { MatFaqModule } from '@angular-material-extensions/faq';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { ServicesComponent } from './components/services/services.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { OurdoctorsComponent } from './components/ourdoctors/ourdoctors.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { TomcatService } from './services/Tomcat/tomcat.service';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthenticationService } from './services/Authentication/authentication.service';
import { AlertService } from './services/Alert/alert.service';
import { UserService } from './services/User/user.service';
import { Interceptor } from './classes/inteceptor';
import { TokenStorageService } from './classes/token.storage';
import { MyappointmentsComponent } from './components/myappointments/myappointments.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientdataComponent,
    FaqsComponent,
    AboutusComponent,
    AppointmentComponent,
    ServicesComponent,
    GalleryComponent,
    OurdoctorsComponent,
    ContactusComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    MyappointmentsComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatExpansionModule,
    AngularFontAwesomeModule,
    MatFaqModule.forRoot(),
    MatFaqModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule
  ],
  providers: [TomcatService,
    AuthenticationService, AlertService, UserService, TokenStorageService, {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
