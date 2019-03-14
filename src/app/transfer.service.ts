import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor() { }
  tasks=[];
 
  t={name:"",phone: ""};

  addtask(){
    this.tasks.push({name:this.t.name,phone:this.t.phone});
    // this.t.name="";
    // this.t.phone="";
  }

}
