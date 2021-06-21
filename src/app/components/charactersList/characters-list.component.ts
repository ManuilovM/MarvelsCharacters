import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MarvelCharacter } from 'src/app/intefaces/marvel-character';
import * as CharactersListActions from "../../ngrx/actions/characters-list.actions"

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  charactersList$: Observable<MarvelCharacter[]>= this.store.select('charactersList') ;

  constructor(private store: Store<{charactersList:Array<MarvelCharacter>}>) { }

  ngOnInit(): void {
     addEventListener('scroll',this.populate.bind(this))
      this.store.dispatch(CharactersListActions.LoadCharacters({indexForm: 0, count:9}))
  }

  populate() {
      let indexFrom: number =document.getElementsByClassName('card').length;
      let windowRelativeBottom = document.getElementsByClassName("character-card-container")[0].getBoundingClientRect().bottom;
      if (windowRelativeBottom < document.documentElement.clientHeight + 100)
      this.store.dispatch(CharactersListActions.LoadCharacters({indexForm: indexFrom, count:3}))
  }

}
