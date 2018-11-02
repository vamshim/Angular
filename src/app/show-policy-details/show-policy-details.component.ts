import { Component, OnInit, ViewChild } from '@angular/core';
import { InsuranceAPIService } from '../insurance-api.service';
import { InsurancePolicyDetails } from '../insurance-policy-details';

@Component({
  selector: 'app-show-policy-details',
  templateUrl: './show-policy-details.component.html',
  styleUrls: ['./show-policy-details.component.css']
})
export class ShowPolicyDetailsComponent implements OnInit {
  page1=0;
  srchName = '';
  constructor(private service: InsuranceAPIService) { }
  policyData:InsurancePolicyDetails = {
    id:0,
    policyHolderName:'',
    maturityDate:new Date(),
    policyAmount:0
  };

  buttonText ='Add';
  idxPos=0;
  toggleForm = false;
  showUp = true;
  showDown = false;

  policyList: InsurancePolicyDetails[] = [];

  @ViewChild('f') form:any;

  ngOnInit() {
      this.service.findPolicy().subscribe(data => this.policyList = data);
  }

  submit(){
    if(this.buttonText === 'Add'){
       this.service.addPolicy(this.policyData).subscribe(resp => {
      this.policyList.push(resp);
      this.form.reset();
    
    });
  }else{
    this.service.updatePolicy(this.policyData).subscribe(resp => {
      this.policyList[this.idxPos] = resp;
      this.form.reset();
      this.buttonText = 'Add';
    });
  }
    console.log(this.policyData);
  }
  update(policy){
    console.log('update called');
    this.idxPos = this.policyList.indexOf(policy);
    this.buttonText = 'Update';
    if(!this.toggleForm){
     // this.toggleForm=true;
      this.showForm();
    }
    this.policyData = policy;
      
  }
  remove(policy){
    const position = this.policyList.indexOf(policy);
    this.service.removePolicy(policy).subscribe(resp => {
      //this.policyList.p
      this.policyList.splice(position,1);

    });
    console.log('remove called');
  }

  showForm(){
    this.toggleForm = !this.toggleForm;
    this.showUp = !this.showUp;
    this.showDown = !this.showDown;
  }

}
