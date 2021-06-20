import { createSelector } from '@ngrx/store';

export interface FeatureState {
    characterList: Array<any>
  }

  export interface AppState {
    feature: FeatureState;
  }

  export const selectFeature = (state: AppState) => state.feature;

  export const selectFeatureCount = createSelector(
    selectFeature,
    (state: FeatureState) => state.characterList
  );