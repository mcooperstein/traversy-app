import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

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
  posts: Post[];
  isEdit:boolean = false;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.name = 'John Doe';
    this.age = 30;
    this.email = 'jdoe@gmail.com'
    this.address = {
      street: '50 Main St.',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = ['Write code', 'Watch movies', 'Listen to music'];
    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    })
  }

  onClick(){
    //document.getElementById("sayName").innerHTML = "Hello, " + this.name;
    this.name = "Marc Cooperstein";
    this.age = 27;
    this.email = "mcooperstein@gmail.com";
    this.address = {
      street: '123 Abc St.',
      city: 'San Mateo',
      state: 'CA'
    }
    this.hobbies.push('playing soccer');
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

  deleteHobby(hobby){
    for(let i =0; i<this.hobbies.length;i++){
      if(this.hobbies[i]==hobby){
        this.hobbies.splice(i,1);
      }
    }
  }

}

interface Address{
  street:string,
  city:string,
  state:string
}

interface Post{
  id: number,
  title: string,
  body: string,
  userId: number
}
