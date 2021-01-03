import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router'
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { CinemaComponent } from './cinema/cinema.component';
import { APP_BASE_HREF } from '@angular/common';

//routes
const routes:Routes=[{
  path:'',component:CinemaComponent
}
];

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
  providers: [{provide: APP_BASE_HREF, useValue: ''}],
  bootstrap: [AppComponent]
})


export class AppModule { }
