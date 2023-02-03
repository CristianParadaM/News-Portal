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
import { NewsCardComponent } from './components/news-card/news-card.component';
import { MatListModule } from '@angular/material/list';
import { WeatherComponent } from './views/weather/weather.component';
import { LogsComponent } from './views/logs/logs.component';
import { MatCardModule } from '@angular/material/card';
import { LimitPipe } from './pipes/limit.pipe';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DetailsComponent } from './views/details/details.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { SpinnerInterceptor } from './interceptors/spinner.interceptor'

@NgModule({
  declarations: [
    AppComponent, NavBarComponent, HomeComponent,
    AdvertisementsComponent, LoginComponent, NewsComponent, MenuComponent, 
    LateralComponent, NewsCardComponent, WeatherComponent, LogsComponent, 
    LimitPipe, DetailsComponent, SpinnerComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule,
    HttpClientModule, MatSidenavModule, MatButtonModule,
    MatIconModule, FormsModule, ReactiveFormsModule, MatFormFieldModule,
    MatInputModule, MatListModule, MatCardModule, MatSelectModule,
    MatDatepickerModule, MatNativeDateModule, MatPaginatorModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
