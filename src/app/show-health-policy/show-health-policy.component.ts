import { Component, OnInit } from '@angular/core';
import { InsuranceAPIService } from '../insurance-api.service';

@Component({
  selector: 'app-show-health-policy',
  templateUrl: './show-health-policy.component.html',
  styleUrls: ['./show-health-policy.component.css']
})
export class ShowHealthPolicyComponent implements OnInit {

  constructor(private service: InsuranceAPIService) { }

  ngOnInit() {
  }

}
