import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayerListComponent } from './ui/player-list/player-list.component';
import { PlayerItemComponent } from './ui/player-item/player-item.component';
import { PlayerAddComponent } from './ui/player-add/player-add.component';
import { StoreModule } from '@ngrx/store';
import * as fromPlayer from './data/player.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PlayerEffects } from './data/player.effects';
import { PlayerDetailsComponent } from './ui/player-details/player-details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PlayerListComponent,
    PlayerItemComponent,
    PlayerAddComponent,
    PlayerDetailsComponent
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    SharedModule,
    StoreModule.forFeature(fromPlayer.playersFeatureKey, fromPlayer.reducer),
    // EffectsModule.forFeature([PlayerEffects])
  ]
})
export class PlayersModule { }
