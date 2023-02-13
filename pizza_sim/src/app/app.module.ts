import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { RegisterComponent } from './register/register.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MemberComponent } from './member/member.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    CategoriesComponent,
    RegisterComponent,
    LoginComponent,
    MemberComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CurrencyPipe,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
