import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CreatePlayer } from 'src/app/shared/models/player/create-player.model';
import { PlayerService } from 'src/app/shared/services/player.service';
import { AppState } from 'src/app/store';

import * as PlayerAction from '../../data/player.actions';
import { NameValidator } from '../../validators/name.validator';

@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.component.html',
  styleUrls: ['./player-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerAddComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl(null, [Validators.required], [NameValidator.createValidator(this.playerService)]),
    description: new FormControl(null, [Validators.required, Validators.minLength(10)])
  }); 

  constructor(private store: Store<AppState>, private playerService: PlayerService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    const newPlayer: CreatePlayer = { ...this.form.value };
    this.store.dispatch(PlayerAction.addPlayer({ player: newPlayer }));
  }
}
