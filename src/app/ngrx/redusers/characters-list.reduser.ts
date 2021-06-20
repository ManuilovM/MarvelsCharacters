import { Action, createReducer, on } from '@ngrx/store';
import { MarvelCharacter } from 'src/app/intefaces/marvel-character';
import * as CharactersActions from '../actions/characters-list.actions';

const Icharacterslist: Array<MarvelCharacter>= []



export const initialState: Array<MarvelCharacter> =Icharacterslist


const charsctersReducer = createReducer(
  initialState, 
  on(CharactersActions.addCharacter, (state, {characters})=>( state.concat(characters) )
    )
)

export function reduser(state: Array<MarvelCharacter> | undefined, action: Action){
  return charsctersReducer(state, action);
}