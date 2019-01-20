import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientdataComponent } from './components/patientdata/patientdata.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { ServicesComponent } from './components/services/services.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { OurdoctorsComponent } from './components/ourdoctors/ourdoctors.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MyappointmentsComponent } from './components/myappointments/myappointments.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'faqs', component: FaqsComponent },
  { path: 'patient', component: PatientdataComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'ourdoctors', component: OurdoctorsComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'myappointment', component: MyappointmentsComponent },
  { path: '', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
