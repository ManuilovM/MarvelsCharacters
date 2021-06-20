import { Action, createAction, props } from '@ngrx/store';
import { MarvelCharacter } from 'src/app/intefaces/marvel-character';


export const LoadCharacters = createAction(
    "[CharactersListComponent] Load Characters",
    props<{indexForm:number, count:number}>()
)

export const CharactersListLoadedSuccess =createAction(
    "[CharactersListComponent] Characters ListLoaded Success",
    props<{payload:Array<MarvelCharacter>}>()
)

export const CharactersListLoadedError = createAction(
    "[CharactersListComponent] Characters ListLoaded Success",
)
