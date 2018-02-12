import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  /*address:{
    street:string,
    city:string,
    state:string
  }*/
  address: Address;
  hobbies:string[];

  constructor() { }

  ngOnInit() {
    this.name = 'John Doe';
    this.age = 30;
    this.email = 'jdoe@gmail.com'
    this.address = {
      street: '50 Main St.',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = ['Write code', 'Watch movies', 'Listen to music']
  }

  onClick(){
    document.getElementById("sayName").innerHTML = "Hello, " + this.name;
  }

}

interface Address{
  street:string,
  city:string,
  state:string
}
