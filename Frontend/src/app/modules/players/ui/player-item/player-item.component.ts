import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/shared/models/player/player.model';

@Component({
  selector: 'app-player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerItemComponent implements OnInit {

  @Input() player: Player;

  constructor() { }

  ngOnInit(): void {
  }

}
