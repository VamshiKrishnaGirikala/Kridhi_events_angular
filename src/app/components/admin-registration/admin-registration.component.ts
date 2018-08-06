import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent implements OnInit {
  
    firstname:string;
    lastname:string;
    email:string;
    password:string;
  

  constructor() { }

  ngOnInit() {
  }
onRegister(register,e:Event){
e.preventDefault();
  console.log(register.firstname,register.lastname,register.email,register.password);
  this.firstname="";
  this.lastname="";
  this.email="";
  this.password="";
  
}
}
