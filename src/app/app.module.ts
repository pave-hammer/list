import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CharacterComponent } from './components/character/character.component';
import { AbilityDataModule } from './models/ability-data/ability-data.module';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AbilityDataModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
