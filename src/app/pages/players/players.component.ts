import { Component, OnInit } from '@angular/core';
import {IPlayer} from "../../interfaces/IPlayer";
import {PlayerService} from "../../core/services/player.service";
import {AdminService} from "../../core/services/admin.service";
import {Router} from "@angular/router";
import {PlayerFormComponent} from "./player-form/player-form.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  public players : IPlayer[] = []

  constructor(private readonly router: Router,
              public dialog: MatDialog,
              private readonly playerService: PlayerService,
              private readonly adminService : AdminService) { }

  ngOnInit(): void {
    this.refreshPlayers()
  }

  public addAPlayer(): void {
    const dialogRef = this.dialog.open(PlayerFormComponent, { width: '500px' });
    dialogRef.afterClosed().subscribe((result: IPlayer) => {
      this.refreshPlayers()
    });
  }

  public refreshPlayers(): void{
    this.playerService.getAllPlayers().subscribe({
      next: res => {
        console.log(res);
        this.players = res;
      },
      error: err => console.error('error while getting artists', err)
    });
  }

  public deletePlayer(player: IPlayer): void {
    this.adminService.deletePlayer(player).subscribe({
      next: () => this.refreshPlayers(),
      error: err => console.error('error while deleting document', err)
    });
  }
}
