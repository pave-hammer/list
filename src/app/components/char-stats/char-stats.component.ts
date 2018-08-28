import { Component, OnInit } from '@angular/core';
import { StatService } from '../../services/stat.service';

@Component({
  selector: 'character',
  templateUrl: './char-stats.component.html',
  styleUrls: ['./char-stats.component.css']
})
export class CharacterComponent implements OnInit {

  constructor(private _statMod: StatService) { }

  ngOnInit() { }

  addStats() {
    this._statMod.modCalc(this._statMod.rawCharStat);
    this.getModResult();
  }

  getModResult() {
    this._statMod.modifierResult;
  }

}
