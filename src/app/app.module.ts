import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { Countermodule } from './counter/counter.module';
import { Heromodule } from './heroes/hero.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    Countermodule,
    Heromodule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
