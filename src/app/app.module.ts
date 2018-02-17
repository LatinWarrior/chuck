import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { JokeService } from './jokes/joke.service';

import { JOKE_PROVIDER } from './jokes/joke.provider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    JokeService,
    JOKE_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
