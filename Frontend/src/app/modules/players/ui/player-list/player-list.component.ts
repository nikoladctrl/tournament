import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Player } from 'src/app/shared/models/player/player.model';
import { AppState } from 'src/app/store';

import * as PlayerActions from '../../data/player.actions';
import * as fromPlayerSelectors from '../../data/player.selectors';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerListComponent implements OnInit {

  players$: Observable<Player[]> = this.store.select(fromPlayerSelectors.selectPlayers);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(PlayerActions.getPlayers());
  }

}
