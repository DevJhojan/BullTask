import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiderbarComponent } from './components/siderbar/siderbar.component';
import { TimeBombComponent } from './components/TimeBomb/TimeBomb.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SiderbarComponent,
    TimeBombComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
