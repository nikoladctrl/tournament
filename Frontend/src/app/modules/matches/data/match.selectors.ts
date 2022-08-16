import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Match } from 'src/app/shared/models/match/match.model';

import * as fromMatch from './match.reducer';

export const selectMatchState = createFeatureSelector<fromMatch.State>(
    fromMatch.matchesFeatureKey
);

export const selectMatches = createSelector(
    selectMatchState,
    fromMatch.selectAll 
);

export const selectIsLoaded = createSelector(
    selectMatchState,
    (state: fromMatch.State) => state.loading ?? false
);

export const selectMatch = (id: number) => createSelector(
    selectMatches,
    (matches: Match[]) => matches.find(m => m.id === id)
);

export const selectMatchesByPlayerId = (playerId: number) => createSelector(
    selectMatches,
    (matches: Match[]) => matches.filter(m => m.playerOneId === playerId || m.playerTwoId === playerId)
);

export const selectIfPlayerHasMatches = (playerId: number) => createSelector(
    selectMatchesByPlayerId(playerId),
    selectIsLoaded,
    (matches: Match[], loading: boolean) => loading && matches.length > 0
);