import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromPlayer from '../modules/players/data/player.reducer';
import * as fromMatch from '../modules/matches/data/match.reducer';


export interface AppState {

  [fromPlayer.playersFeatureKey]: fromPlayer.State;
  [fromMatch.matchesFeatureKey]: fromMatch.State;
}

export const reducers: ActionReducerMap<AppState> = {

  [fromPlayer.playersFeatureKey]: fromPlayer.reducer,
  [fromMatch.matchesFeatureKey]: fromMatch.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
