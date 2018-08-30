import { Injectable } from '@angular/core';
import { CharStat, ModStat } from '../interfaces/stat';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'round'})
export class RoundPipe implements PipeTransform {
  transform(value: number): number {
    return Math.round(value);
  }
}

@Injectable({
  providedIn: 'root'
})
export class ModifierService {

  stat: any[];
  mod: ModStat[];

  constructor() { 
    this.stat = [
      {ability: "Strength"},
      {ability: "Dexterity"},
      {ability: "Constitution"},
      {ability: "Wisdom"},
      {ability: "Intelligence"},
      {ability: "Charisma"}
    ]

  }

  getModifier(stat: CharStat) : number { 
    return (stat.abilityStat - 10) / 2;
  }
}
