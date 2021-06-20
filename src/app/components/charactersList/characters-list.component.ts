import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MarvelCharacter } from 'src/app/classes/marvel-character';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  charactersList$: Observable<MarvelCharacter[]>= this.store.select('characterList') ;

  constructor(private store: Store<{characterList:Array<MarvelCharacter>}>) { }

  ngOnInit(): void {
  }

}
