import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Match } from 'src/app/shared/models/match/match.model';
import * as MatchActions from './match.actions';

export const matchesFeatureKey = 'matches';

export interface State extends EntityState<Match> {
  // additional entities state properties
  loading: boolean
}

export const adapter: EntityAdapter<Match> = createEntityAdapter<Match>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  loading: false
});

export const reducer = createReducer(
  initialState,
  on(MatchActions.getMatchesSuccess, 
    (state, action) => adapter.setAll(action.matches, {
      ...state,
      loading: true
    })
  ),
  on(MatchActions.getMatchesForPlayerSuccess, 
    (state, action) => adapter.addMany(action.matches, state)
  ),
  on(MatchActions.getMatchSuccess, 
    (state, action) => adapter.addOne(action.match, state)
  ),
  on(MatchActions.addMatchSuccess,
    (state, action) => adapter.addOne(action.match, state)
  ),
  on(MatchActions.upsertMatch,
    (state, action) => adapter.upsertOne(action.match, state)
  ),
  on(MatchActions.addMatchs,
    (state, action) => adapter.addMany(action.matchs, state)
  ),
  on(MatchActions.upsertMatchs,
    (state, action) => adapter.upsertMany(action.matchs, state)
  ),
  on(MatchActions.updateMatch,
    (state, action) => adapter.updateOne(action.match, state)
  ),
  on(MatchActions.updateMatchs,
    (state, action) => adapter.updateMany(action.matchs, state)
  ),
  on(MatchActions.deleteMatch,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(MatchActions.deleteMatchs,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  // on(MatchActions.loadMatchs,
  //   (state, action) => adapter.setAll(action.matchs, state)
  // ),
  on(MatchActions.clearMatchs,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
