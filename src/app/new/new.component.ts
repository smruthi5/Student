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
  

  @Output() newStudentAdded= new EventEmitter<Stud>();

  
  constructor() { }


  ngOnInit() {
   this.fname.setValue('Swetha');
   this.lname.setValue('Jk');
  }

 

  
  onSubmit(){
   const firstname=this.fname.value;
   const lastname=this.lname.value;
   const date=this.dob.value;
   const  newStudent= new Stud(firstname,lastname,date);
   alert(newStudent.lastname );
     this.newStudentAdded.emit(newStudent);
  }

}
