import { Stud } from './stud.model';
import { Injectable } from '@angular/core';
@Injectable()
export class StudDetailsService{

    
    students: Stud[]=[
        //  new Stud('Smruthi','Jishnu','05-11-1994'),
        //  new Stud('Smruthi','Jishnu','05-11-1994')
       ];

       studAdded(student: Stud){
        //   alert(this.student.firstname);
     this.students.push(student);
        
        }
}