import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PlayerAdminService} from './player-admin.service';
import {IPlayer} from "../../interfaces/IPlayer";

@Injectable({
  providedIn: 'root'
})
export class PlayerService extends PlayerAdminService {

  protected getEndpoint(): string {
    return 'player';
  }

  constructor(protected override readonly http: HttpClient) {
    super(http);
  }

  public getAllPlayers(): Observable<IPlayer[]> {
    return this.http.get<IPlayer[]>(`${super.getServiceURL()}/all`);
  }

}
