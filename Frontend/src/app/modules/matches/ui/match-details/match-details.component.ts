import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { Match } from 'src/app/shared/models/match/match.model';

import * as MatchActions from '../../data/match.actions';
import * as fromMatchSelectors from '../../data/match.selectors';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchDetailsComponent implements OnInit {

  match$: Observable<Match> = this.store.select(fromMatchSelectors.selectMatch(+this.route.snapshot.params['id']));

  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.store.dispatch(MatchActions.getMatch({ id: +this.route.snapshot.params['id'] }));
  }

}
