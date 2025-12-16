import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NavbarComponent } from './commoncomponents/navbar/navbar.component';
import { FooterComponent } from './commoncomponents/footer/footer.component';
import { IphoneComponent } from './navigatingcomponents/iphone/iphone.component';
import { AndroidComponent } from './navigatingcomponents/android/android.component';
import { HelpComponent } from './navigatingcomponents/help/help.component';
import { CompanyComponent } from './navigatingcomponents/company/company.component';
import { SigninComponent } from './navigatingcomponents/signin/signin.component';
import { BannerComponent } from './welcome/banner/banner.component';
import { AndroidUsersComponent } from './welcome/android-users/android-users.component';
import { MobileSecurityComponent } from './welcome/mobile-security/mobile-security.component';
import { SpywareComponent } from './welcome/spyware/spyware.component';
import { AboutComponent } from './welcome/about/about.component';
import { FindComponent } from './welcome/find/find.component';
import { LatestInsightsComponent } from './welcome/latest-insights/latest-insights.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PagenotfoundComponent,
    NavbarComponent,
    FooterComponent,
    IphoneComponent,
    AndroidComponent,
    HelpComponent,
    CompanyComponent,
    SigninComponent,
    BannerComponent,
    AndroidUsersComponent,
    MobileSecurityComponent,
    SpywareComponent,
    AboutComponent,
    FindComponent,
    LatestInsightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
