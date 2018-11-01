import { Component, OnInit } from '@angular/core';
import { PageLink } from '../page-link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  majHeading:string;
  logo:string;
  
    links:PageLink[];

  constructor() { 
    this.majHeading ="Verizon Insurance";
    this.logo ='assets/images/verizon.png';
    this.links = [{linkText:'Home',linkRef:'Home',linkStyle:'nav'},
    {linkText:'Aboutus',linkRef:'Aboutus',linkStyle:'nav'},
    {linkText:'Contact',linkRef:'Contact',linkStyle:'nav'}];
  }

  ngOnInit() {
  }

}
