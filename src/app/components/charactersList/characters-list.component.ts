import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  charactersList$ = this.store.select('characterList') ;

  constructor(private store: Store<{characterList:Array<any>}>) { }

  ngOnInit(): void {
  }

}
