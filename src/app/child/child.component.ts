import { Component, OnInit, Input, OnChanges,  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  
  ngOnChanges(change:SimpleChanges){
    console.log(change.name.currentValue);
    console.log(change.name.previousValue);
  }
  @Input() name:string;
  constructor() {

    console.log('child constructor called');
    console.log('input property in constructor '+this.name);;
   }

  ngOnInit() {
    console.log('child ngOnInit called');
    console.log('input property '+this.name);;
  }

}
