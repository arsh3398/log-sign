import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { materialmodules } from './material.modules';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { HomeComponent } from './Mycomp/home/home.component';
import { LoginComponent } from './Mycomp/login/login.component';
import { PopupComponent } from './Mycomp/popup/popup.component';
import { RegistrationComponent } from './Mycomp/registration/registration.component';
import { UsercompComponent } from './Mycomp/usercomp/usercomp.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PopupComponent,
    RegistrationComponent,
    UsercompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    materialmodules, // all the modules from mateiral.module are imported here
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
