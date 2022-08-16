import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { Match } from 'src/app/shared/models/match/match.model';

import * as MatchActions from '../../data/match.actions';
import * as fromMatchSelectors from '../../data/match.selectors';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchListComponent implements OnInit {

  matches$: Observable<Match[]> = this.store.select(fromMatchSelectors.selectMatches);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(MatchActions.getMatches());
  }

}
