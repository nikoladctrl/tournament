import { combineLatest } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { ActivatedRoute } from '@angular/router';

import * as PlayerActions from '../../data/player.actions';
import * as MatchActions from '../../../matches/data/match.actions';
import * as fromPlayerSelectors from '../../data/player.selectors';
import * as fromMatchSelectors from '../../../matches/data/match.selectors';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerDetailsComponent implements OnInit {

  vm$ = combineLatest(
    this.store.select(fromPlayerSelectors.selectPlayer(+this.route.snapshot.params["id"])),
    this.store.select(fromMatchSelectors.selectMatchesByPlayerId(+this.route.snapshot.params["id"])),
    (player, matches) => ({ player, matches })
  );
  

  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.store.dispatch(PlayerActions.getPlayer({ id: +this.route.snapshot.params["id"] }));
    this.store.dispatch(MatchActions.getMathesForPlayer({ id: +this.route.snapshot.params["id"] }));
  }

}
