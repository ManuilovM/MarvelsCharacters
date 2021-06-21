import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MarvelCharacter } from 'src/app/intefaces/marvel-character';
import * as OneCharacterActions from "../../ngrx/actions/character.actions"



@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  id:number;
  character$ :Observable<MarvelCharacter> = this.store.select('character');

  constructor(private store: Store<{character: MarvelCharacter}>,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.store.dispatch(OneCharacterActions.LoadOneCharacter({id:this.id}))
  }

}
