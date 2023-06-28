import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlayersComponent} from "./pages/players/players.component";
import {TournamentComponent} from "./pages/tournament/tournament.component";

const routes: Routes = [
  {path: 'players', component: PlayersComponent, },
  {path: 'tournament', component: TournamentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
