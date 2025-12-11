import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { IphoneComponent } from './navigatingcomponents/iphone/iphone.component';
import { AndroidComponent } from './navigatingcomponents/android/android.component';
import { HelpComponent } from './navigatingcomponents/help/help.component';
import { CompanyComponent } from './navigatingcomponents/company/company.component';
import { SigninComponent } from './navigatingcomponents/signin/signin.component';

const routes: Routes = [
{ path:"",component:WelcomeComponent},
{ path:"iphone",component:IphoneComponent},
{ path:"Android",component:AndroidComponent},
{ path:"Help",component:HelpComponent},
{ path:"Company",component:CompanyComponent},
{ path:"Signin",component:SigninComponent},
{ path:"",component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
