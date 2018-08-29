import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AbilityDataModule { 
   ability = new Map([
    ["Strength", 10],
    ["Dexterity", 10],
    ["Constitution", 10],
    ["Intelligence", 10],
    ["Wisdom", 10],
    ["Charisma", 10]
   ]);
 }
