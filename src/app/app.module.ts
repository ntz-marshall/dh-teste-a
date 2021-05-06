import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home-component';
import { CallUsComponent } from './call-us/call-us-component';
import { ServicesComponent } from './services/services-component';
import { PugBgComponent } from './pug-bg-component/pug-bg-component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallUsComponent,
    ServicesComponent,
    PugBgComponent,
    ButtonsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
