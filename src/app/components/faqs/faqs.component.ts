import { MatFaqModule } from '@angular-material-extensions/faq';
import { Component, OnInit, NgModule, ViewEncapsulation, Input } from '@angular/core';
import { FaqItem } from '@angular-material-extensions/faq';
import { MatButtonModule, MatCardModule, MatExpansionModule, MatIconModule, MatInputModule, MatToolbarModule } from '@angular/material';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {
  panelOpenState = false;
  @Input()
  title = 'Frequently Asked Questions';
  @Input()
  multi = false;
  @Input()
  displayMode = 'default';
  @Input()
  faqList: FaqItem[] = [
    {
      question: 'When should you use MyExpertMedics?',
      // tslint:disable-next-line:max-line-length
      answer: 'MyExpertMedics provides online second medical opinion from highly qualified doctors, leaders in their respective fields. Contact MyExpertMedics when there is uncertainty about a diagnosis or want to reaffirm a medical plan of action.'
    },
    {
      question: 'How does MyExpertMedics select a physician for me?',
      // tslint:disable-next-line:max-line-length
      answer: 'The physicians we work with for second opinions are experts in their respective fields and include physicians practicing at leading medical hospitals.'
    }, {
      question: 'When should you use MyExpertMedics?',
      // tslint:disable-next-line:max-line-length
      answer: 'MyExpertMedics provides online second medical opinion from highly qualified doctors, leaders in their respective fields. Contact MyExpertMedics when there is uncertainty about a diagnosis or want to reaffirm a medical plan of action.'
    },
    {
      question: 'How does MyExpertMedics select a physician for me?',
      // tslint:disable-next-line:max-line-length
      answer: 'The physicians we work with for second opinions are experts in their respective fields and include physicians practicing at leading medical hospitals.'
    }, {
      question: 'When should you use MyExpertMedics?',
      // tslint:disable-next-line:max-line-length
      answer: 'MyExpertMedics provides online second medical opinion from highly qualified doctors, leaders in their respective fields. Contact MyExpertMedics when there is uncertainty about a diagnosis or want to reaffirm a medical plan of action.'
    },
    {
      question: 'How does MyExpertMedics select a physician for me?',
      // tslint:disable-next-line:max-line-length
      answer: 'The physicians we work with for second opinions are experts in their respective fields and include physicians practicing at leading medical hospitals.'
    }, {
      question: 'When should you use MyExpertMedics?',
      // tslint:disable-next-line:max-line-length
      answer: 'MyExpertMedics provides online second medical opinion from highly qualified doctors, leaders in their respective fields. Contact MyExpertMedics when there is uncertainty about a diagnosis or want to reaffirm a medical plan of action.'
    },
    {
      question: 'How does MyExpertMedics select a physician for me?',
      // tslint:disable-next-line:max-line-length
      answer: 'The physicians we work with for second opinions are experts in their respective fields and include physicians practicing at leading medical hospitals.'
    }
  ];
  constructor() { }
  ngOnInit() {
  }
}

