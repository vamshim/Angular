import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ViewCompileResult } from '@angular/compiler/src/view_compiler/view_compiler';
import { ComponentAdderService } from '../component-adder.service';
import { ShowLocationComponent } from '../show-location/show-location.component';

@Component({
  selector: 'app-search-branch',
  templateUrl: './search-branch.component.html',
  styleUrls: ['./search-branch.component.css']
})
export class SearchBranchComponent implements OnInit {


  city:string;
  branchList: string[];

  @ViewChild('locationInfo',{read:ViewContainerRef}) viewRef:ViewContainerRef;

  constructor(private service: ComponentAdderService) { }

  ngOnInit() {
  }

  onChange(val){
    this.branchList = val;
  }

  add(){
    this.service.setViewRef(this.viewRef);
    const comp = this.service.addComponent(ShowLocationComponent);
    const locationComp = <ShowLocationComponent>comp.instance

    locationComp.selectedLocation.subscribe(val => {
      this.city=val;
      if(val.length > 0){
        this.remove();
      }

    });
      
      
  }
  remove(){
    this.viewRef.detach();
  }

}
