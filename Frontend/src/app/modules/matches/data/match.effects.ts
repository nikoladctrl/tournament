import { concatMap, filter, map, switchMap, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import { AppState } from 'src/app/store';
import { MatchService } from 'src/app/shared/services/match.service';

import * as MatchActions from './match.actions';
import * as fromMatchSelectors from './match.selectors';
import { Router } from '@angular/router';



@Injectable()
export class MatchEffects {

  getMatches$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(MatchActions.getMatches),
        concatLatestFrom(() => this.store.select(fromMatchSelectors.selectIsLoaded)),
        filter(([, isLoaded]) => !isLoaded),
        switchMap(() =>
          this.matchService.getMatches().pipe(
            map(matches => MatchActions.getMatchesSuccess({ matches })),
            )
          ),
    );
  });

  getMatch$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(MatchActions.getMatch),
        concatLatestFrom((action) => this.store.select(fromMatchSelectors.selectMatch(action.id))),
        filter(([, ifMatchExists]) => !ifMatchExists),
        switchMap((action) =>
          this.matchService.getMatch(action[0].id).pipe(
            map(match => MatchActions.getMatchSuccess({ match })),
            )
          ),
    );
  });

  getMatchesForPlayer$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(MatchActions.getMathesForPlayer),
        concatLatestFrom((action) => this.store.select(fromMatchSelectors.selectIfPlayerHasMatches(action.id))),
        filter(([, ifPlayerHasMatches]) => !ifPlayerHasMatches),
        switchMap((action) =>
          this.matchService.getMatchesByPlayerId(action[0].id).pipe(
            map(matches => MatchActions.getMatchesForPlayerSuccess({ matches })),
            )
          ),
    );
  });

  addMatch$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(MatchActions.addMatch),
        concatMap((action) =>
          this.matchService.createMatch(action.match).pipe(
            map(match => MatchActions.addMatchSuccess({ match })),
            tap(() => this.router.navigate(['/matches']))
            )
          ),
    );
  });

  constructor(
    private actions$: Actions, 
    private store: Store<AppState>, 
    private matchService: MatchService,
    private router: Router
  ) {}

}
