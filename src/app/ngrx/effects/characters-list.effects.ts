import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MarvelsApiService } from "src/app/servises/marvels-api.service";
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';

import * as CharactersListActions from "../actions/characters-list.actions"
import { MarvelCharacter } from "src/app/intefaces/marvel-character";
import { of } from "rxjs";
import { MarvelCharacterFromApi } from "src/app/intefaces/marvel-character-from-api";


@Injectable()
export class CharactersListEffects{
    loadCharacters$ = createEffect(()=> this.actions$.pipe(
        ofType(CharactersListActions.LoadCharacters), 
        exhaustMap(action=>this.marvelApiServise.getMarvelCharacters(action.indexForm, action.count).pipe(
            map((answer)=>CharactersListActions.CharactersListLoadedSuccess({payload: this.transformApiAnswerToMarvelsCharacter(answer)})),
            catchError( error=>of( CharactersListActions.CharactersListLoadedError() ) )
            ))
    ))

    constructor(
        private actions$: Actions,
        private marvelApiServise: MarvelsApiService
    ){}

    transformApiAnswerToMarvelsCharacter(answer):Array<MarvelCharacter>{
        let primaryList: Array<MarvelCharacterFromApi> = answer.data.results;
        return primaryList.map((item)=>{
            return {
                id: item.id,
                name: item.name,
                description: item.description,
                avatarSrc: item.thumbnail.path+"/standard_xlarge."+item.thumbnail.extension,
            }
        })
    }
}