import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchesRoutingModule } from './matches-routing.module';
import { MatchListComponent } from './ui/match-list/match-list.component';
import { MatchItemComponent } from './ui/match-item/match-item.component';
import { MatchAddComponent } from './ui/match-add/match-add.component';
import { StoreModule } from '@ngrx/store';
import * as fromMatch from './data/match.reducer';
import { SharedModule } from 'src/app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { MatchEffects } from './data/match.effects';
import { MatchDetailsComponent } from './ui/match-details/match-details.component';


@NgModule({
  declarations: [
    MatchListComponent,
    MatchItemComponent,
    MatchAddComponent,
    MatchDetailsComponent
  ],
  imports: [
    CommonModule,
    MatchesRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromMatch.matchesFeatureKey, fromMatch.reducer),
    // EffectsModule.forFeature([MatchEffects])
  ]
})
export class MatchesModule { }
