import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../../bootstrap.css']
})
export class HomeComponent implements OnInit {

  constructor(private ts: TransferService) { }
  // tasks=[];
  
  // i:any;
  tasks=[];
 
  delete(i){
    this.tasks.splice(i,1)
  }
  

  ngOnInit() {
    this.tasks=this.ts.tasks;
    // this.name = this.ts.t.name;
    // this.phone = this.ts.t.phone;
  }

}
