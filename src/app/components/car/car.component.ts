import { Component, OnInit } from '@angular/core';
import { Patient } from '../car/patient';

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

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
                patientname: 'Patient1', dob: '2011', country: 'Singapore', contact: 'Singapore'
            }, {
                patientname: 'Patient2', dob: '2011', country: 'Singapore', contact: 'Singapore'
            }
        ];

        this.cols = [
            { field: 'patientname', header: 'Patient Name' },
            { field: 'dob', header: 'Date of Birth' },
            { field: 'country', header: 'Country' },
            { field: 'contact', header: 'Contact' }
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
    constructor(public patientname?, public dob?, public contact?, public country?) { }
}
