import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'hinv-reactive-form-component',
  templateUrl: './reactive-form-component.component.html',
  styleUrls: ['./reactive-form-component.component.css']
})
export class ReactiveFormComponentComponent implements OnInit {

  contactForm = new FormGroup({
    firstname: new FormControl('rahul'),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      street: new FormControl(),
      pincode: new FormControl(),
      country: new FormControl(),
    })
  })

  contactForm2: any;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm2 = this.formBuilder.group(
      {
        firstname: ['rahul', [Validators.required, Validators.minLength(10)]],
        lastname: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],
        email: ['', [Validators.required, Validators.email]],
        gender: ['', [Validators.required]],
        isMarried: ['', [Validators.required]],
        country: ['', [Validators.required]],
        address: this.formBuilder.group({
          city: ['', [Validators.required]],
          street: ['', [Validators.required]],
          pincode: ['', [Validators.required]],
        })
      });
      
  }
  ngOnInit(): void {

  }
  onSubmit() {
    console.log(this.contactForm2.value);
  }
  get firstname() {
    return this.contactForm2.get('firstname');
  }
 
  get lastname() {
    return this.contactForm2.get('lastname');
  }
 
  get email() {
    return this.contactForm2.get('email');
  }
 
  get gender() {
    return this.contactForm2.get('gender');
  }
 
  get isMarried() {
    return this.contactForm2.get('isMarried');
  }
 
  get country() {
    return this.contactForm2.get('country');
  }
 
  get city() {
    return this.contactForm2.get("address").get('city');
  }
 
  get street() {
    return this.contactForm2.get("address").get('street');
  }
 
  get pincode() {
    return this.contactForm2.get("address").get('pincode');
  }
 



}
