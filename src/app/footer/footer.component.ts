import { Component, OnInit } from '@angular/core';
import { PageLink } from '../page-link';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  /*twitter:string;
  instagram:string;
  facebook:string;
  constructor() { 
    this.twitter="TWITTER";
    this.instagram ="INSTAGRAM";
    this.facebook="FACEBOOK";

  }*/

 // links= ['TWITTER','INSTAGRAM','FACEBOOK'];
  links:PageLink[]= [{linkText: 'Twitter' , linkStyle: 'fa fa-2x fa-twitter'},
  {linkText: 'Instagram' , linkStyle: 'fa fa-2x fa-instagram'},
  {linkText: 'Facebook' , linkStyle: 'fa fa-2x fa-facebook'}
  ];
  constructor(){  
   
  }

  ngOnInit() {
  }

}
