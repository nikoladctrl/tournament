import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatchListComponent } from './ui/match-list/match-list.component';
import { MatchAddComponent } from './ui/match-add/match-add.component';
import { MatchDetailsComponent } from './ui/match-details/match-details.component';


const routes: Routes = [
  { path: '', component: MatchListComponent },
  { path: 'new', component: MatchAddComponent },
  { path: ':id', component: MatchDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchesRoutingModule { }
