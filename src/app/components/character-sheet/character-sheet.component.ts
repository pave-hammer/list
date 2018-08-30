import { Component, OnInit } from '@angular/core';
import { ModifierService } from '../../services/modifier.service';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  constructor(private _modifierSerivce: ModifierService) { }

  ngOnInit() { }

}
