import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MarvelsApiService } from "src/app/servises/marvels-api.service";
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';

import * as OneCharacterActions from "../actions/character.actions"
import { MarvelCharacter } from "src/app/intefaces/marvel-character";

import { of } from "rxjs";
import { MarvelCharacterFromApi } from "src/app/intefaces/marvel-character-from-api";


@Injectable()
export class CharacterEffects{
    loadCharacter$ = createEffect(()=> this.actions$.pipe(
        ofType(OneCharacterActions.LoadOneCharacter), 
        exhaustMap(action=>this.marvelApiServise.getCharacterById(action.id).pipe(
            map((answer)=>OneCharacterActions.OneCharacterLoadedSuccess({payload: this.transformApiAnswerToOneMarvelsCharacter(answer)})),
            catchError( error=>of( OneCharacterActions.OneCharacterLoadedError() ) )
            ))
    ))

    constructor(
        private actions$: Actions,
        private marvelApiServise: MarvelsApiService
    ){}

    transformApiAnswerToOneMarvelsCharacter(answer):MarvelCharacter{
        let primaryList: Array<MarvelCharacterFromApi> = answer.data.results;
        return primaryList.map((item)=>{
            return {
                id: item.id,
                name: item.name,
                description: item.description,
                avatarSrc: item.thumbnail.path+"/standard_xlarge."+item.thumbnail.extension,
                imgSrc: item.thumbnail.path+"/landscape_xlarge."+item.thumbnail.extension,
                comics: item.comics,
                series: item.series,
                stories: item.stories,
                events: item.events
            }
        })[0]
    }
}