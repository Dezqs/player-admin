import {ITournamentPlayer} from "./ITournamentPlayer";

export interface ITournament {
  tournamentName: string;
  players: ITournamentPlayer[];
}
