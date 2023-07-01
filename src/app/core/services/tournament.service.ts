import { Injectable } from '@angular/core';
import {PlayerAdminService} from "./player-admin.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPlayer} from "../../interfaces/IPlayer";
import {ITournament} from "../../interfaces/ITournament";

@Injectable({
  providedIn: 'root'
})
export class TournamentService extends PlayerAdminService {

  constructor(protected override readonly http: HttpClient) {
    super(http);
  }

  protected getEndpoint(): string {
    return 'tournament';
  }

  public getAllTournament(): Observable<ITournament[]> {
    return this.http.get<ITournament[]>(`${super.getServiceURL()}/all`);
  }
}
