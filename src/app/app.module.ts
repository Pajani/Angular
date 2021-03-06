import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from  '@angular/common/http';
//import {HttpClientModule} from 'selenium-webdriver/http/'
import { AngularFireAuthModule } from 'angularfire2/auth';
//import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SvcProvidersComponent } from './svc-providers/svc-providers.component';
import { PostsComponent } from './posts/posts.component';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import {AfService} from './provider/af.service';
import {ApiService} from './provider/api.service';
import { SearchResultComponent } from './search-result/search-result.component';
import { VerifyMobileComponent } from './verify-mobile/verify-mobile.component';
//import * as firebase from 'firebase';



 export const firebaseConfig = {
    
    apiKey: "AIzaSyBZ6qq9OJbIKvYraCIOOGqNyp_19yBXm2o",
    authDomain: "thandora-58cba.firebaseapp.com",
    databaseURL: "https://thandora-58cba.firebaseio.com",
    projectId: "thandora-58cba",
    storageBucket: "thandora-58cba.appspot.com",
    messagingSenderId: "391118300920"

    
  };


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SvcProvidersComponent,
    PostsComponent,
    BannerComponent,
    HomeComponent,
    SigninComponent,
    SearchResultComponent,
    VerifyMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    //firebase.initializeApp(firebaseConfig)
    AngularFireModule.initializeApp(firebaseConfig),
    //AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule , // imports firebase/auth, only needed for auth features
  ],
  providers: [AfService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

//error 405  throw while calling web api, http ok status not returned in api
//chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security 
///C:\Program Files (x86)\Google\Chrome\Application>chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
//https://www.telerik.com/forums/options-405-not-allowed-even-with-chrome-app-extension
//ng build --prod --base-href="webapp"
