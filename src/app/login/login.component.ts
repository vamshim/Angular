import { Component, OnInit } from '@angular/core';
import { ComponentCommunicationService } from '../component-communication.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   loginForm:FormGroup;
   formConfig:any = [
     {type:'text', name:'userName',label:'User Name',constraint:Validators.required},
     {type:'password', name:'passWord',label:'PassWord',constraint:Validators.required}
   ];
  errorMessage: string;

  constructor(private router:Router, private route:ActivatedRoute, private service:ComponentCommunicationService,
     private builder:FormBuilder) { 
    this.loginForm = this.builder.group({});
    
  }

  ngOnInit() {
    this.route.params.subscribe(pathParam => {
      this.errorMessage = pathParam['msg'];
    });

    this.formConfig.forEach(element => {
      this.loginForm.addControl(element.name,new FormControl('', {validators: element.constraint}));
    });
  }

  validate(){
    console.log(this.loginForm.value);
      const uname = this.loginForm.controls.userName.value;
      const pwd = this.loginForm.controls.passWord.value;

      if(uname === 'vamshi' && pwd === 'vamshi'){
        sessionStorage.setItem('logged','true');
        this.router.navigate(['Products']);
      }else{
        this.errorMessage = "Invalid UserName or Password";
      }

    this.service.changeMessage('logged');
  }

}
