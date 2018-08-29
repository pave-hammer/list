import { Injectable } from '@angular/core';
import { AbilityDataModule } from '../models/ability-data/ability-data.module';

@Injectable({
  providedIn: 'root'
})
export class ModifierCalculationsService {

  constructor(private _abilityData: AbilityDataModule) { }

  setStrength: any;
  setDexterity: any;
  setConstitution: any;
  setIntelligence: any;
  setWisdom: any;
  setCharisma: any;

  modifiers: number[] = [];

  getModifiers() {
    for (let modifier of this._abilityData.ability.values()) {
      var modifierResults = (modifier - 10) / 2;
      this.modifiers.push(modifierResults);
    }
  }

  setStats() {
    this._abilityData.ability.set("Strength", this.setStrength);
    this._abilityData.ability.set("Dexterity", this.setDexterity);
    this._abilityData.ability.set("Constitution", this.setConstitution);
    this._abilityData.ability.set("Intelligence", this.setIntelligence);
    this._abilityData.ability.set("Wisdom", this.setWisdom);
    this._abilityData.ability.set("Charisma", this.setCharisma);
    this.getModifiers();
  }
}
