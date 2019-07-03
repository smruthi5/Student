import { Component, Output, EventEmitter, ViewContainerRef, ElementRef, OnInit } from '@angular/core';
import { Stud } from './stud.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
 
 
  fname= new FormControl('');
  lname= new FormControl('');
  dob= new FormControl('');
  add=new FormControl('');
  city=new FormControl('');
  state=new FormControl(''); 
  zip=new FormControl('');
  gender=new FormControl('');
  
  

//  @Output() newStudentAdded=new EventEmitter<Stud>();

  
  constructor() { }


  ngOnInit() {
  }

 newStudent:Stud;
  
   onSubmit(){
    this. newStudent=new Stud(this.fname.value,this.lname.value,this.dob.value,this.add.value,this.city.value,this.state.value,this.zip.value,this.gender.value);
   }
   onClear(){
    this.fname.setValue("");
    this.lname.setValue("");
    this.dob.setValue("");
    this.add.setValue("");
    this.city.setValue("");
    this.state.setValue("");
    this.zip.setValue("");
    this.gender.setValue("");

   }

}
