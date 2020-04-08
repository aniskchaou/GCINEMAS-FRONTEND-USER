import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { CinemaComponent } from './cinema/cinema.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

//routes
const routes:Routes=[{
  path:"cinema",component:CinemaComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    CinemaComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
