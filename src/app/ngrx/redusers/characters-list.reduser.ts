import { Action, createReducer, on } from '@ngrx/store';
import { MarvelCharacter } from 'src/app/intefaces/marvel-character';
import * as CharactersActions from '../actions/characters-list.actions';



export const initialState: Array<MarvelCharacter> =[]


const charsctersReducer = createReducer(
  initialState, 
  on(
    CharactersActions.CharactersListLoadedSuccess, (state, {payload})=>(state.concat(payload))
  ),
  on(CharactersActions.CharactersListLoadedError,(state)=>(state))
)

export function reduser(state: Array<MarvelCharacter> | undefined, action: Action){
  return charsctersReducer(state, action);
}