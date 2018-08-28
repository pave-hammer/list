import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CharacterComponent } from './components/char-stats/char-stats.component';

import { StatService } from './services/stat.service';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
