import { Component, OnInit } from '@angular/core';
import { ModifierCalculationsService } from '../../services/modifier-calculations.service';

@Component({
  selector: 'character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  constructor(private _modCalc: ModifierCalculationsService) { }

  ngOnInit() {
  }
  
}
