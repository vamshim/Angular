import { Component, OnInit } from '@angular/core';
import { InsuranceAPIService } from '../insurance-api.service';
import { InsurancePolicyDetails } from '../insurance-policy-details';

@Component({
  selector: 'app-show-policy-details',
  templateUrl: './show-policy-details.component.html',
  styleUrls: ['./show-policy-details.component.css']
})
export class ShowPolicyDetailsComponent implements OnInit {

  constructor(private service: InsuranceAPIService) { }

  policyList: InsurancePolicyDetails[];
  ngOnInit() {
      this.service.findPolicy().subscribe(data => this.policyList = data);
  }

}
