import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ShowAdvisorsComponent } from './show-advisors/show-advisors.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { ShowQuoteComponent } from './show-quote/show-quote.component';
import { MenuComponent } from './menu/menu.component';
import { SearchBranchComponent } from './search-branch/search-branch.component';
import { ShowBranchComponent } from './show-branch/show-branch.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HighLightDirective } from './high-light.directive';
import { AddElementDirective } from './add-element.directive';
import { ShowLocationComponent } from './show-location/show-location.component';
import { ShowPolicyDetailsComponent } from './show-policy-details/show-policy-details.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipe } from './filter.pipe';
import { DetailsComponent } from './details/details.component';
import { ShowHealthPolicyComponent } from './show-health-policy/show-health-policy.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ChildComponent } from './child/child.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ShowAdvisorsComponent,
    ShowQuoteComponent,
    MenuComponent,
    SearchBranchComponent,
    ShowBranchComponent,
    TestimonyComponent,
    LoginComponent,
    LogoutComponent,
    HighLightDirective,
    AddElementDirective,
    ShowLocationComponent,
    ShowPolicyDetailsComponent,
    FilterPipe,
    DetailsComponent,
    ShowHealthPolicyComponent,
    LifeCycleComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,FormsModule,NgxPaginationModule,ReactiveFormsModule
  ],
  providers: [HttpClient],
  entryComponents: [ShowLocationComponent],
  bootstrap: [AppComponent,FooterComponent]
  //bootstrap: [LifeCycleComponent]
})
export class AppModule { }
