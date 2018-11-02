import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { PolicyDetails } from '../policy-details';
import { TestimonyComponent } from '../testimony/testimony.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, AfterViewInit {
  


  policyList:PolicyDetails[];

  @ViewChild(TestimonyComponent)compRef:TestimonyComponent;
  show = false;
  corpFeedback:string;
  retailFeedback:String;
  
  constructor(private ref: ChangeDetectorRef) { 
    this.policyList = [{policyName:'Jeevan Anand',description:'description of Jeevan Anand Garu '},
                {policyName:'Jeevan Akashay', description:'Description of Jeevan Akashay'}];
  }
  
  ngAfterViewInit(): void {
    //throw new Error("Method not implemented.");
    this.corpFeedback = this.compRef.getCorpCustomerFeedBack();
    this.retailFeedback=this.compRef.getRetailCustomerFeedBack();
    this.show = true;
    this.ref.detectChanges();
  }
  ngOnInit() {
  }

}
