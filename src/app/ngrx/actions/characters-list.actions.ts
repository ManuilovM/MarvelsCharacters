import { Action, createAction, props } from '@ngrx/store';
import { MarvelCharacter } from 'src/app/intefaces/marvel-character';

export enum CharactersListActions{ 
    LoadCharacters = "[CharactersListComponent] Load Characters",
    CharactersListLoadedSuccess = "[CharactersListComponent] Characters ListLoaded Success",
    CharactersListLoadedError = "[CharactersListComponent] Characters ListLoaded Errror",
}

export const addCharacter=createAction(
    '[charactersList] addCharacter',
    props<{characters: Array<any>}>()
)

export class LoadCharacters implements Action{
    readonly type = CharactersListActions.LoadCharacters

    constructor( public indexFrom: number, public count: number ){}
}

export class CharactersListLoadedSuccess implements Action{
    readonly type: CharactersListActions.CharactersListLoadedSuccess

    constructor(public payload: Array<MarvelCharacter>){}
}

export class CharactersListLoadedError implements Action{
    readonly type: CharactersListActions.CharactersListLoadedError
}

export type CharactersListUnion =
  | LoadCharacters
  | CharactersListLoadedSuccess
  | CharactersListLoadedError