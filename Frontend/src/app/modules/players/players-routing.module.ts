import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayerListComponent } from './ui/player-list/player-list.component';
import { PlayerAddComponent } from './ui/player-add/player-add.component';
import { PlayerDetailsComponent } from './ui/player-details/player-details.component';

const routes: Routes = [
  { path: '', component: PlayerListComponent },
  { path: 'new', component: PlayerAddComponent },
  { path: ':id', component: PlayerDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersRoutingModule { }
