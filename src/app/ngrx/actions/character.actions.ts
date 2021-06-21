import { Action, createAction, props } from '@ngrx/store';
import { MarvelCharacter } from 'src/app/intefaces/marvel-character';


export const LoadOneCharacter = createAction(
    "[CharacterComponent] Load One Characters",
    props<{id:number}>()
)

export const OneCharacterLoadedSuccess =createAction(
    "[CharacterComponent] One Character Loaded Success",
    props<{payload:MarvelCharacter}>()
)

export const OneCharacterLoadedError = createAction(
    "[CharacterComponent] One Character Loaded Success",
)
