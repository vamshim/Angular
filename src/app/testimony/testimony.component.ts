import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css']
})
export class TestimonyComponent implements OnInit {

  retailCustomer:string;
  corpCustomer:string;

  constructor() { }

  ngOnInit() {
  }

  getRetailCustomerFeedBack():string{
    this.retailCustomer ='Claims processing is prompt and received payment with in a week a time';
    return this.retailCustomer;
  }
  getCorpCustomerFeedBack():string{
    this.corpCustomer = 'Door Step service by the advisors';
    return this.corpCustomer;
  }

}
