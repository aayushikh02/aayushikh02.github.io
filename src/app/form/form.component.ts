import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css','../../bootstrap.css']
})
export class FormComponent implements OnInit {

  constructor(private ts: TransferService) { }
 
  tasks=[];
 
  t={name:"",phone: ""};
  
  addtask(){
    this.ts.t.name=this.t.name;
    this.ts.t.phone=this.t.phone;
    this.ts.addtask();
  }
  


  // delete(i){
  //   this.tasks.splice(i,1)
  // }

  ngOnInit() {
  }

}
