import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './views/details/details.component';
import { HomeComponent } from './views/home/home.component';
import { LogsComponent } from './views/logs/logs.component';
import { MenuComponent } from './views/menu/menu.component';
import { NewsComponent } from './views/news/news.component';
import { WeatherComponent } from './views/weather/weather.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'menu', component: MenuComponent, children: [
      { path: 'news', component: NewsComponent },
      { path: 'details/:author/:content/:description/:publishedAt/:source/:title/:url/:urlToImage', component: DetailsComponent },
      { path: 'weather', component: WeatherComponent },
      { path: 'logs', component: LogsComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
