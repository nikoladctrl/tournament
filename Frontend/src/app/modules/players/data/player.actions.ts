import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Player } from 'src/app/shared/models/player/player.model';
import { CreatePlayer } from 'src/app/shared/models/player/create-player.model';



export const getPlayers = createAction(
  '[Player List Component] Get Players'
);

export const getPlayersSuccess = createAction(
  '[Player Effect] Get Players Success',
  props<{ players: Player[] }>()
);

export const getPlayer = createAction(
  '[Player Details Component] Get Player',
  props<{ id: number }>() 
);

export const getPlayerSuccess = createAction(
  '[Player Effects] Get Player Success',
  props<{ player: Player }>() 
);

export const addPlayer = createAction(
  '[Player Add Component] Add Player',
  props<{ player: CreatePlayer }>()
);

export const addPlayerSuccess = createAction(
  '[Player Effect] Add Player Success',
  props<{ player: Player }>()
);

export const upsertPlayer = createAction(
  '[Player/API] Upsert Player',
  props<{ player: Player }>()
);

export const addPlayers = createAction(
  '[Player/API] Add Players',
  props<{ players: Player[] }>()
);

export const upsertPlayers = createAction(
  '[Player/API] Upsert Players',
  props<{ players: Player[] }>()
);

export const updatePlayer = createAction(
  '[Player/API] Update Player',
  props<{ player: Update<Player> }>()
);

export const updatePlayers = createAction(
  '[Player/API] Update Players',
  props<{ players: Update<Player>[] }>()
);

export const deletePlayer = createAction(
  '[Player/API] Delete Player',
  props<{ id: string }>()
);

export const deletePlayers = createAction(
  '[Player/API] Delete Players',
  props<{ ids: string[] }>()
);

export const clearPlayers = createAction(
  '[Player/API] Clear Players'
);
