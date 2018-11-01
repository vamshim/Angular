import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentAdderService {

  viewRef:ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) { }
  //where to add 
  setViewRef(viewRef){
    this.viewRef = viewRef;
  }

  //what to Add

  addComponent(compToAdd:any):any{
    //entry components will have a factory created and registered in resolveer
    const factory = this.resolver.resolveComponentFactory(compToAdd);
    //Access the viewRef's Injector to inject the component
    const compRef = factory.create(this.viewRef.parentInjector);
    //insert the hostview of the component that is component related .html file
    this.viewRef.insert(compRef.hostView);
    return compRef;
  }

}
