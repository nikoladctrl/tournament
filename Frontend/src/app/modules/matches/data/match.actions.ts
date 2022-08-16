import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Match } from 'src/app/shared/models/match/match.model';
import { CreateMatch } from 'src/app/shared/models/match/create-match.model';

export const getMatches = createAction(
  '[Match List Component] Get Matches'
);

export const getMatchesSuccess = createAction(
  '[Match List Component] Get Matches Success', 
  props<{ matches: Match[] }>()
);

export const getMathesForPlayer = createAction(
  '[Player Details Component] Get Matches For Player',
  props<{ id: number }>()
);

export const getMatchesForPlayerSuccess = createAction(
  '[Player Effect] Get Matches For Player Success',
  props<{ matches: Match[] }>()
);

export const getMatch = createAction(
  '[Match Details Component] Get Match',
  props<{ id: number }>()
);

export const getMatchSuccess = createAction(
  '[Match Effect] Get Match Success', 
  props<{ match: Match }>()
);

export const addMatch = createAction(
  '[Match Add Component] Add Match',
  props<{ match: CreateMatch }>()
);

export const addMatchSuccess = createAction(
  '[Match Effect] Add Match Success',
  props<{ match: Match }>()
);

export const upsertMatch = createAction(
  '[Match/API] Upsert Match',
  props<{ match: Match }>()
);

export const addMatchs = createAction(
  '[Match/API] Add Matchs',
  props<{ matchs: Match[] }>()
);

export const upsertMatchs = createAction(
  '[Match/API] Upsert Matchs',
  props<{ matchs: Match[] }>()
);

export const updateMatch = createAction(
  '[Match/API] Update Match',
  props<{ match: Update<Match> }>()
);

export const updateMatchs = createAction(
  '[Match/API] Update Matchs',
  props<{ matchs: Update<Match>[] }>()
);

export const deleteMatch = createAction(
  '[Match/API] Delete Match',
  props<{ id: string }>()
);

export const deleteMatchs = createAction(
  '[Match/API] Delete Matchs',
  props<{ ids: string[] }>()
);

export const clearMatchs = createAction(
  '[Match/API] Clear Matchs'
);

export const getPlayers = createAction(
  '[Match Add Component] Get Players'
);