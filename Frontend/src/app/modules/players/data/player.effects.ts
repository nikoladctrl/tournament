import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { AppState } from 'src/app/store';
import { PlayerService } from 'src/app/shared/services/player.service';
import { concatMap, filter, map, switchMap, tap } from 'rxjs/operators';

import * as PlayerActions from './player.actions';
import * as MatchActions from '../../matches/data/match.actions';
import * as fromPlayerSelectors from './player.selectors';
import { Router } from '@angular/router';



@Injectable()
export class PlayerEffects {

  getPlayers$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(PlayerActions.getPlayers, MatchActions.getPlayers),
        concatLatestFrom(() => this.store.select(fromPlayerSelectors.selectIsLoaded)),
        filter(([, isLoaded]) => !isLoaded),
        switchMap(() =>
          this.playerService.getPlayers().pipe(
            map(players => PlayerActions.getPlayersSuccess({ players })),
            )
          ),
    );
  });

  getPlayer$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(PlayerActions.getPlayer),
        concatLatestFrom((action) => this.store.select(fromPlayerSelectors.selectPlayer(action.id))),
        filter(([, ifPlayerExists]) => !ifPlayerExists),
        switchMap((action) =>
          this.playerService.getPlayer(action[0].id).pipe(
            map(player => PlayerActions.getPlayerSuccess({ player })),
            )
          ),
    );
  });

  addPlayer$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(PlayerActions.addPlayer),
        concatMap((action) =>
          this.playerService.createPlayer(action.player).pipe(
            map(player => PlayerActions.addPlayerSuccess({ player })),
            tap(() => this.router.navigate(['/players']))
            )
          ),
    );
  });

  constructor(
    private actions$: Actions, 
    private store: Store<AppState>, 
    private playerService: PlayerService,
    private router: Router
  ) {}

}
