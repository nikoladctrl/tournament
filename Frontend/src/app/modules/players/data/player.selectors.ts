import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Player } from 'src/app/shared/models/player/player.model';
import * as fromPlayer from './player.reducer';

export const selectPlayerState = createFeatureSelector<fromPlayer.State>(
    fromPlayer.playersFeatureKey
);

export const selectPlayers = createSelector(
    selectPlayerState,
    fromPlayer.selectAll
);

export const selectIsLoaded = createSelector(
    selectPlayerState,
    (state: fromPlayer.State) => state.loading ?? false
);

export const selectPlayer = (id: number) => createSelector(
    selectPlayers,
    (players: Player[]) => players.find(p => p.id === id)
);

export const selectLoading = createSelector(
    selectPlayerState,
    (state: fromPlayer.State) => state.loading
);