import { createAction, props } from '@ngrx/store';

export const addCharacter=createAction(
    '[characterList] addCharacter',
    props<{characters: Array<any>}>()
)

