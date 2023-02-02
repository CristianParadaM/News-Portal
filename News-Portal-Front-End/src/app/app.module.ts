import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './views/home/home.component';
import { AdvertisementsComponent } from './components/advertisements/advertisements.component';
import { HttpClientModule } from '@angular/common/http'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './views/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NewsComponent } from './views/news/news.component';
import { MenuComponent } from './views/menu/menu.component';
import { LateralComponent } from './views/lateral/lateral.component';
import { NewsCardComponent } from './components/news-card/news-card.component'

@NgModule({
  declarations: [
    AppComponent, NavBarComponent, HomeComponent,
    AdvertisementsComponent, LoginComponent, NewsComponent, MenuComponent, LateralComponent, NewsCardComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule, 
    HttpClientModule, MatSidenavModule, MatButtonModule,
    MatIconModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, 
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
