import { Injectable } from '@angular/core';
import { MyAbilityInterface } from '../interfaces/char-sheet-interface';

@Injectable()
export class StatService {

  constructor() { }

  rawCharStat = [];  
  modifierResult = [];
  profBonus: number;

  modCalc(rawCharStat) {
    for (let mod of this.rawCharStat) {
      var modifier = (mod - 10) / 2;
      this.modifierResult.push(modifier);
    }
  }
}
