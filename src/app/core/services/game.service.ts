import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {PlayerAdminService} from './player-admin.service';
import {IGame} from "../../interfaces/IGame";

@Injectable({
  providedIn: 'root'
})
export class GameService extends PlayerAdminService {

  protected getEndpoint(): string {
    return 'game';
  }

  constructor(protected override readonly http: HttpClient) {
    super(http);
  }

  public getAllGames(): Observable<IGame[]> {
    return this.http.get<IGame[]>(`${super.getServiceURL()}/all`);
  }

  public addGame(game: any): Observable<IGame> {
    return this.http.post<IGame>(super.getServiceURL(), game);
  }

}
