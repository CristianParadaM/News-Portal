import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './views/details/details.component';
import { HomeComponent } from './views/home/home.component';
import { MenuComponent } from './views/menu/menu.component';
import { NewsComponent } from './views/news/news.component';
import { WeatherComponent } from './views/weather/weather.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'menu', component: MenuComponent, children: [
      { path: 'news', component: NewsComponent, ...canActivate(() => redirectUnauthorizedTo(['/home'])) },
      { path: 'details/:author/:content/:description/:publishedAt/:source/:title/:url/:urlToImage', component: DetailsComponent ,...canActivate(() => redirectUnauthorizedTo(['/home']))},
      { path: 'weather', component: WeatherComponent ,...canActivate(() => redirectUnauthorizedTo(['/home']))}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
