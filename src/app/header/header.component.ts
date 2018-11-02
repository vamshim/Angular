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

    this.links = [
    {linkText:'Products',linkRef:'Products',linkStyle:'nav-link'},
    {linkText:'History',linkRef:'history',linkStyle:'nav-link'},
    {linkText:'Advisors',linkRef:'Advisors',linkStyle:'nav-link'},
    {linkText:'Get Quote',linkRef:'quote',linkStyle:'nav-link'},
    {linkText:'Branches',linkRef:'branches',linkStyle:'nav-link'}
    ];
  }

  ngOnInit() {
  }

}
