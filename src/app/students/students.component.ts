import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {


  name = 'Student';
  isactive =true;
  display ='none';
  email="ssaa@gmail.com";


  students :any; 



  onSave(){
    console.log("Button was Click");
  }

  onKeyupEnter(){
    console.log(this.email);
  }

  constructor(http :Http) { 
    http.get("http://localhost:3000/students")
    .subscribe(response => {
      this.students=response.json();
    })
  }
  ngOnInit() {
  }

}
