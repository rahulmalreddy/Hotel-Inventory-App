import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { contact } from '../models/contact.interface';
import { country } from '../models/country.interface';



@Component({
  selector: 'hinv-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {
  contact!: contact;
  countryList: country[] = [
    { id: "1", name: "india" },
    { id: "2", name: "USA" },
    { id: "3", name: "Canada" }
  ];
  constructor() { }
  ngOnInit() {
    this.contact = {
      firstname: "Sachin",
      lastname: "Tendulkar",
      email: "sachin@gmail.com",
      gender: "male",
      isMarried: true,
      country: "2",
      address: { city: "Mumbai", street: "Perry Cross Rd", pincode: "400050" }
    };
  }
  onSubmit(contactform: any) {
    console.log(contactform.value);
  }
  reset(contactForm: NgForm) {
    contactForm.resetForm();
  }
  setDefaults() {
    this.contact = {
      firstname: "Sachin",
      lastname: "Tendulkar",
      email: "sachin@gmail.com",
      gender: "male",
      isMarried: true,
      country: "2",
      address: { city: "Mumbai", street: "Perry Cross Rd", pincode: "400050" }
    };
  }
  changeCountry() {
    this.contact.country = "1";
  }
}


