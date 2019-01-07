import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Component, OnInit, Input, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-patientdata',
  templateUrl: './patientdata.component.html',
  styleUrls: ['./patientdata.component.css']
})
export class PatientdataComponent implements OnInit, PipeTransform {



  @Pipe({
    name: 'safe'
  })

  safeUrl: SafeResourceUrl;
  private urlValue: string;

  @Input()
  get url(): string {
    return this.urlValue;
  }
  set url(value: string) {
    this.urlValue = value;
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }

  pname = 'Patient-1' ;
  city = 'Hyderabad';
  dob = '21-DEC-1994';
  country = 'India';
  items = ['Fever', 'Couge'];
  attachments = ['X-ray', 'Prescriptions'];
  id = 'ravi.devireddy07';
  whatsappNum = '919866272346';
  skypeID: String = 'ravi.devireddy07';


  ngOnInit(): void {

  }

  transform(safeUrl) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(safeUrl);
  }
  constructor(private sanitizer: DomSanitizer) { }

}
