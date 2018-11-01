import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InsuranceAdvisor } from './insurance-advisor';
import { InsurancePolicyDetails } from './insurance-policy-details';

@Injectable({
  providedIn: 'root'
})
export class InsuranceAPIService {

  baseURL = 'http://localhost:3000/';
  constructor(private http :HttpClient) { }

  findAllAdvisors(): Observable<InsuranceAdvisor[]>{
    const adviseURL = this.baseURL+'advisors';
    console.log(adviseURL);
    return this.http.get<InsuranceAdvisor[]>(adviseURL);
  }

  findPolicy(): Observable<InsurancePolicyDetails[]>{
    const licUrl = this.baseURL+'lifeInsurance';
    return this.http.get<InsurancePolicyDetails[]>(licUrl);
  }
}
