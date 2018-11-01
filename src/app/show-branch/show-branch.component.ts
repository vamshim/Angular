import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-branch',
  templateUrl: './show-branch.component.html',
  styleUrls: ['./show-branch.component.css']
})
export class ShowBranchComponent implements OnInit {

  @Input() cityName: string;
  @Output() branches:EventEmitter<String[]> = new EventEmitter<String[]>();
  constructor() { 
    console.log(this.cityName);
  }

  ngOnInit() {
    console.log("inside onInit "+this.cityName);
  }

  sendBranches(){
    if(this.cityName == 'Hyderabad'){
      this.branches.emit(['Lingampally','Madhapur','Miyapur','KPHB','Gachibowli']);
    }else{
      this.branches.emit(['Anna Nagar','OTP','RMZ','ANNAMALAI']);
    }
  }

}
