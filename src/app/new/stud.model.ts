export class Stud{
    firstname: string="";
    lastname: string="";
    dob: Date;
    address: string;
    city: string;
    state: string;
    zip: number;
    gender: string;

    constructor(fname,lname,dob,add,city,state,zip,gen){
        this.firstname=fname;
        this.lastname=lname;
        this.dob=dob;
        this.address=add;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.gender=gen;
    } 



}