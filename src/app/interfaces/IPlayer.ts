import {IRankedTournament} from "./IRankedTournament";

export interface IPlayer {
  pseudo: string;
  games: IRankedTournament[];
}
