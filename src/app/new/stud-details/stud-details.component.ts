import { Component,  OnInit, Input, ViewChild } from '@angular/core';
import { Stud } from '../stud.model';
import { StudDetailsService } from '../stud-details.service';

@Component({
  selector: 'app-stud-details',
  templateUrl: './stud-details.component.html',
  styleUrls: ['./stud-details.component.scss']
})
export class StudDetailsComponent implements OnInit { 

  //  @Input() PData: number;
  
  @Input() student: Stud;
 students: Stud[]=[
    //  new Stud('Smruthi','Jishnu','05-11-1994'),
    //  new Stud('Smruthi','Jishnu','05-11-1994')
   ];
   
  constructor(private studDetailsService: StudDetailsService) { }

  ngOnInit() {
  }
  // studAdded(student: Stud){
  // //   alert(this.student.firstname);
  // //  this.students.push(student);
  
  // }

}
