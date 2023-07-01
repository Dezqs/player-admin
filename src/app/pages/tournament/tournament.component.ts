import { Component, OnInit } from '@angular/core';
import {ITournament} from "../../interfaces/ITournament";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {AdminService} from "../../core/services/admin.service";
import {TournamentService} from "../../core/services/tournament.service";
import {PlayerFormComponent} from "../players/player-form/player-form.component";
import {IPlayer} from "../../interfaces/IPlayer";

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {

  public tournaments : ITournament[] = []
  public allTournaments: ITournament[] = []

  constructor(private readonly router: Router,
              public dialog: MatDialog,
              private readonly tournamentService: TournamentService,
              private readonly adminService : AdminService) { }

  ngOnInit(): void {
    this.refresh()
  }

  public refresh(): void{
    this.tournamentService.getAllTournament().subscribe({
      next: res => {
        console.log(res);
        this.tournaments = res;
        this.allTournaments = res;
      },
      error: err => console.error('error while getting artists', err)
    });
  }

  public addGame(): void {
    const dialogRef = this.dialog.open(PlayerFormComponent, { width: '500px' });
    dialogRef.afterClosed().subscribe((result: IPlayer) => {
      this.refresh()
    });
  }

  public delete(tournament: ITournament) {
    this.adminService.deleteTournament(tournament).subscribe({
      next: () => this.refresh(),
      error: err => console.error('error while deleting document', err)
    });
  }

  public searchTournament(event: any) {
    const search = event.target.value;
    if (search) {
      this.tournaments = this.allTournaments
        .filter(a => a.tournamentName.toUpperCase().startsWith(search.toUpperCase()))
    }else{
      this.tournaments = this.allTournaments
    }
  }

  searchPlayerTournaments(event: any) {
    const search = event.target.value;
    if (search) {
      this.tournaments = this.allTournaments
        .filter(a => a.players.find(player => player.pseudo.toUpperCase().startsWith(search.toUpperCase())));
    }else{
      this.tournaments = this.allTournaments
    }
  }
}
