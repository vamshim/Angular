import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InsuranceAdvisor } from './insurance-advisor';
import { InsurancePolicyDetails } from './insurance-policy-details';

@Injectable({
  providedIn: 'root'
})
export class InsuranceAPIService {

  baseURL = 'http://localhost:3000/';
  licUrl = this.baseURL+'lifeInsurance';
 header = new HttpHeaders().set('content-type','application/json');
  constructor(private http :HttpClient) { }

  findAllAdvisors(): Observable<InsuranceAdvisor[]>{
    const adviseURL = this.baseURL+'advisors';
    console.log(adviseURL);
    return this.http.get<InsuranceAdvisor[]>(adviseURL);
  }

  findPolicy(): Observable<InsurancePolicyDetails[]>{
   
    return this.http.get<InsurancePolicyDetails[]>(this.licUrl);
  }

  addPolicy(policy:InsurancePolicyDetails):Observable<InsurancePolicyDetails>{
    return this.http.post<InsurancePolicyDetails>(this.licUrl,policy,{headers: this.header});

  }
  removePolicy(policy:InsurancePolicyDetails):Observable<InsurancePolicyDetails>{

    const deleteURL = this.licUrl+"/"+`${policy.id}`;
    console.log(deleteURL);
    return this.http.delete<InsurancePolicyDetails>(deleteURL,{headers: this.header});

  }

  updatePolicy(policy:InsurancePolicyDetails):Observable<InsurancePolicyDetails>{
    const updateURL = this.licUrl+"/"+`${policy.id}`;
    console.log(updateURL);
    return this.http.put<InsurancePolicyDetails>(updateURL,policy,{headers: this.header});
  }
}
