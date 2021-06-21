import { Action, createReducer, on } from '@ngrx/store';
import { MarvelCharacter } from 'src/app/intefaces/marvel-character';
import * as CharacterActions from '../actions/character.actions';



export const initialState: MarvelCharacter = null;

const charscterReducer = createReducer(
  initialState, 
  on(CharacterActions.OneCharacterLoadedSuccess, (state, {payload})=>payload),
  on(CharacterActions.OneCharacterLoadedError,(state)=>(state))
)

export function reduser(state: MarvelCharacter | undefined, action: Action){
  return charscterReducer(state, action);
}