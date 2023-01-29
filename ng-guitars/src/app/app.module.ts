import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { GuitarCataloguePage } from './pages/guitar-catalogue/guitar-catalogue.page';
import { ProfilePage } from './pages/profile/profile.page';
import { AppRoutingModule } from './app-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { GuitarListComponent } from './components/guitar-list/guitar-list.component';

@NgModule({
  declarations: [ // components
    AppComponent,
    LoginPage,
    GuitarCataloguePage,
    ProfilePage,
    LoginFormComponent,
    GuitarListComponent
  ],
  imports: [  // modules
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
