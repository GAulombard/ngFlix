import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { SliderComponent } from './component/slider/slider.component'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, MovieListComponent, SliderComponent],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
