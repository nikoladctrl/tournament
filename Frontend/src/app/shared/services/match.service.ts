import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Match } from '../models/match/match.model';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  url: string = `${environment.baseUrl}/matches`;

  constructor(private http: HttpClient) { }

  getMatches() {
    return this.http.get<Match[]>(this.url);
  }

  getMatch(matchId: number) {
    return this.http.get<Match>(`${this.url}/${matchId}`);
  }

  createMatch(newMatch) {
    return this.http.post<Match>(this.url, newMatch);
  }

  getMatchesByPlayerId(playerId: number) {
    return this.http.get<Match[]>(`${this.url}/by-player/${playerId}`);
  }
}
