import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CreatePlayer } from '../models/player/create-player.model';
import { Player } from '../models/player/player.model';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  url: string = `${environment.baseUrl}/players`;

  constructor(private http: HttpClient) { }

  getPlayers() {
    return this.http.get<Player[]>(this.url);
  }

  getPlayer(playerId: number) {
    return this.http.get<Player>(`${this.url}/${playerId}`);
  }

  createPlayer(newPlayer: CreatePlayer) {
    return this.http.post<Player>(this.url, newPlayer);
  }
}
