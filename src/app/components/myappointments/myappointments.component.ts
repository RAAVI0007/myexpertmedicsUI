import { Component, OnInit } from '@angular/core';
import { Patient } from '../myappointments/patient';

@Component({
  selector: 'app-myappointments',
  templateUrl: './myappointments.component.html',
  styleUrls: ['./myappointments.component.css']
})
export class MyappointmentsComponent implements OnInit {

  displayDialog: boolean;
  patient: Patient = new PrimePatient();
  selectedCar: Patient;
  newCar: boolean;
  patients: Patient[];
  cols: any[];
  constructor() { }

  ngOnInit() {

    this.patients = [
      {
        patientname: 'Patient1', dob: '12-Jul-2011', country: 'Singapore', city: 'Singapore', contact: '+91-9866272346',
        wapnum: '+91-9866272346', skype: 'ravi.devireddy07', attachments: ['X-Ray', 'Report']
      }, {
        patientname: 'Patient2', dob: '2012', country: 'India', city: 'Hyderabad', contact: '+91-9908002520',
        wapnum: '+91-9908002520', skype: 'test', attachments: ['X-Ray', 'Report']
      }, {
        patientname: 'Patient3', dob: '2012', country: 'India', city: 'Hyderabad', contact: '+91-9908002520',
        wapnum: '+91-9908002520', skype: 'test', attachments: ['X-Ray', 'Report']
      }, {
        patientname: 'Patient4', dob: '2012', country: 'India', city: 'Hyderabad', contact: '+91-9908002520',
        wapnum: '+91-9908002520', skype: 'test', attachments: ['X-Ray', 'Report']
      }, {
        patientname: 'Patient5', dob: '2012', country: 'India', city: 'Hyderabad', contact: '+91-9908002520',
        wapnum: '+91-9908002520', skype: 'test', attachments: ['X-Ray', 'Report']
      }, {
        patientname: 'Patient6', dob: '2012', country: 'India', city: 'Hyderabad', contact: '+91-9908002520',
        wapnum: '+91-9908002520', skype: 'test', attachments: ['X-Ray', 'Report']
      }, {
        patientname: 'Patient7', dob: '2012', country: 'India', city: 'Hyderabad', contact: '+91-9908002520',
        wapnum: '+91-9908002520', skype: 'test', attachments: ['X-Ray', 'Report']
      }, {
        patientname: 'Patient8', dob: '2012', country: 'India', city: 'Hyderabad', contact: '+91-9908002520',
        wapnum: '+91-9908002520', skype: 'test', attachments: ['X-Ray', 'Report']
      }, {
        patientname: 'Patient9', dob: '2012', country: 'India', city: 'Hyderabad', contact: '+91-9908002520',
        wapnum: '+91-9908002520', skype: 'test', attachments: ['X-Ray', 'Report']
      }, {
        patientname: 'Patient10', dob: '2012', country: 'India', city: 'Hyderabad', contact: '+91-9908002520',
        wapnum: '+91-9908002520', skype: 'test', attachments: ['X-Ray', 'Report']
      }
    ];

    this.cols = [
      { field: 'patientname', header: 'Patient Name', width: '25%' },
      { field: 'dob', header: 'Date of Birth', width: '25%' },
      { field: 'country', header: 'Country', width: '25%' },
      { field: 'city', header: 'City', width: '25%' },
      { field: 'contact', header: 'Contact', width: '25%' },
      { field: 'wapnum', header: 'Whatsapp', width: '25%' },
      { field: 'skype', header: 'Skype', width: '25%' },
    ];
  }
  showDialogToAdd() {
    this.newCar = true;
    this.patient = {};
    this.displayDialog = true;
  }

  save() {
    // tslint:disable-next-line:prefer-const
    let cars = [...this.patients];
    // tslint:disable-next-line:curly
    if (this.newCar)
      cars.push(this.patient);
    // tslint:disable-next-line:curly
    else
      cars[this.findSelectedCarIndex()] = this.patient;

    this.patients = cars;
    this.patient = null;
    this.displayDialog = false;
  }


  delete() {
    const index = this.patients.indexOf(this.selectedCar);
    this.patients = this.patients.filter((val, i) => i !== index);
    this.patients = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newCar = false;
    this.patient = this.cloneCar(event.data);
    this.displayDialog = true;
  }

  cloneCar(c: Patient): Patient {
    const car = new PrimePatient();
    // tslint:disable-next-line:forin
    for (const prop in c) {
      car[prop] = c[prop];
    }
    return car;
  }

  findSelectedCarIndex(): number {
    return this.patients.indexOf(this.selectedCar);
  }
}

class PrimePatient implements Patient {
  constructor(public patientname?, public dob?, public contact?, public country?, public attachments?) { }
}
