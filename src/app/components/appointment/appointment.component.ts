import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray, NgForm } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { PatientInfo } from './patientinfo';
import { TomcatService } from '../../services/Tomcat/tomcat.service';
import { UploadFileService } from '../../services/UploadService/upload-file.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})

export class AppointmentComponent implements OnInit {
  images = ['https://github.com/RAAVI0007/myexpertmedicsUI/blob/master/src/images/RamasamiNandakumar.jpg?raw=true',
    'https://github.com/RAAVI0007/myexpertmedicsUI/blob/master/src/images/meghana.png?raw=true',
    'https://github.com/RAAVI0007/myexpertmedicsUI/blob/master/images/doc3.jpg?raw=true'];


  public rows: { reasons: string }[];
  progress: { percentage: number } = { percentage: 0 };
  currentFileUpload: File;
  selectedFiles: FileList;
  uploadedFiles: any[] = [];
  file: any;
  isRowAdded = true;
  constructor(private uploadService: UploadFileService,
    private appointService: TomcatService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private httpPay: Http) {
    this.rows = [];
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  model;
  title = 'MyExpert Medics';
  registerForm: FormGroup;
  paymentForm: FormGroup;
  submitted = false;
  dataSaved = false;
  articleForm: FormGroup;
  headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
  res: any;
  posts: any;
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastname: ['', Validators.required],
      dob: ['', Validators.required],
      diagnosis: ['', Validators.required],
      phnum: ['', Validators.required],
      reasons: ['', Validators.required],
      problem: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      bkgtime: ['', Validators.required],
      uploaddoc: ['', Validators.required]

    });

    this.paymentForm = this.formBuilder.group({
      cardnum: ['', Validators.required],
      expmonth: ['', Validators.required],
      expyear: ['', Validators.required],
      cvv: ['', Validators.required]
    });

  }

  onUpload(event) {
    for (const file of event.files) {
      console.log(file.name);
      this.uploadedFiles.push(file);
    }
  }


  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  uploadFile() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
    this.selectedFiles = undefined;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    let Params = new HttpParams();
    Params = Params.append('firstParameter', this.registerForm.value.firstName);
    Params = Params.append('secondParameter', this.registerForm.value.lastName);

    // tslint:disable-next-line:max-line-length
    /* return this.http.post('http://localhost:8080/RESTWebService/rest/lvcalc/rsfsjson', {params: { params: Params }}).subscribe(data => {
         this.posts = data;
         console.log(this.posts);
       });  */

    return this.http.post('http://localhost:8080/users/1', 'Hello', {
      headers: new HttpHeaders({
        'Content-type': 'text/palin',
        'responseType': 'text/palin'
      })
    }).subscribe(
      data => {
        console.log('POST Request is successful==', data);
      },
      error => {
        console.log('Error==', error);
      }
    );

  }

  onAddRow(rowVal) {
    if (this.rows.indexOf(rowVal) === -1 || this.rows.length === 0) {
      this.rows.push(rowVal);
    } else {
      alert('Reason Already added');
    }
  }

  createItemFormGroup(): FormGroup {
    return this.formBuilder.group({
      reasons: null
    });
  }

  onFormSubmit() {
    alert('Form Submiited..' + this.registerForm.invalid);
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    alert('Form Submiited..');
    this.dataSaved = false;
    const patientinfo = this.registerForm.value;
    console.log('firstName1===' + patientinfo.firstName);
    console.log('lastname=' + patientinfo.lastname);
    console.log('email=' + patientinfo.email);
    console.log('phnum=' + patientinfo.phnum);
    console.log('reason=' + patientinfo.reasons);
    console.log('DOB=' + patientinfo.dob);
    console.log('Diagnosis=' + patientinfo.diagnosis);

    this.appointService.saveAppointment(patientinfo).subscribe(
      article => {
        console.log(article);
        this.dataSaved = true;
      },
      err => {
        console.log(err);
      }
    );
    this.registerForm.reset();
  }

  onPaymentFormSubmit() {
    if (this.paymentForm.invalid) {
      return;
    }
    const cardinfo = this.paymentForm.value;
    console.log('cardNum===' + cardinfo.cardnum);
    console.log('Month===' + cardinfo.expmonth);
    console.log('Year===' + cardinfo.expyear);
    console.log('CVV===' + cardinfo.cvv);

    const form = document.getElementsByTagName('form')[0];
    (<any>window).Stripe.card.createToken({
      number: cardinfo.cardnum,
      exp_month: cardinfo.expmonth,
      exp_year: cardinfo.expyear,
      cvc: cardinfo.cvv
    }, (status: number, response: any) => {
      if (status === 200) {
        const token = response.id;
        this.chargeCard(token);
      } else {
        console.log(response.error.message);
      }
    });
  }

  chargeCard(token: string) {
    const headers = new Headers({ 'token': token, 'amount': 100 });
    this.httpPay.post('http://localhost:8080/payment/charge', {}, { headers: headers })
      .subscribe(resp => {
        console.log(resp);
      });
  }
}
