import { Injectable } from '@angular/core';
import {PlayerAdminService} from "./player-admin.service";
import {Observable} from "rxjs";
import {IPlayer} from "../../interfaces/IPlayer";
import {HttpClient} from "@angular/common/http";
import {ITournament} from "../../interfaces/ITournament";

@Injectable({
  providedIn: 'root'
})
export class AdminService extends PlayerAdminService {

  constructor(protected override readonly http: HttpClient) {
    super(http);
  }

  protected getEndpoint(): string {
    return "admin";
  }

  public deletePlayer(player: any): Observable<IPlayer> {
    return this.http.delete<IPlayer>(`${super.getServiceURL()}/player/${player.pseudo}`);
  }

  public deleteTournament(tournament: any): Observable<ITournament> {
    return this.http.delete<ITournament>(`${super.getServiceURL()}/tournament/${tournament.tournamentName}`);
  }

}
