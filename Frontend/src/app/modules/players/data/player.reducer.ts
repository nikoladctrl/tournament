import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Player } from 'src/app/shared/models/player/player.model';
import * as PlayerActions from './player.actions';

export const playersFeatureKey = 'players';

export interface State extends EntityState<Player> {
  // additional entities state properties,
  loading: boolean
}

export const adapter: EntityAdapter<Player> = createEntityAdapter<Player>();

export const initialState: State = adapter.getInitialState({
  loading: false
});

export const reducer = createReducer(
  initialState,
  on(PlayerActions.getPlayersSuccess, 
    (state, action) => adapter.setAll(action.players, {
      ...state,
      loading: true
    })
  ),
  on(PlayerActions.getPlayerSuccess, 
    (state, action) => adapter.addOne(action.player, state)
  ),
  on(PlayerActions.addPlayerSuccess,
    (state, action) => adapter.addOne(action.player, state)
  ),
  on(PlayerActions.upsertPlayer,
    (state, action) => adapter.upsertOne(action.player, state)
  ),
  on(PlayerActions.addPlayers,
    (state, action) => adapter.addMany(action.players, state)
  ),
  on(PlayerActions.upsertPlayers,
    (state, action) => adapter.upsertMany(action.players, state)
  ),
  on(PlayerActions.updatePlayer,
    (state, action) => adapter.updateOne(action.player, state)
  ),
  on(PlayerActions.updatePlayers,
    (state, action) => adapter.updateMany(action.players, state)
  ),
  on(PlayerActions.deletePlayer,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(PlayerActions.deletePlayers,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  // on(PlayerActions.loadPlayers,
  //   (state, action) => adapter.setAll(action.players, state)
  // ),
  on(PlayerActions.clearPlayers,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
