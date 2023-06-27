import { Component, OnInit } from '@angular/core';
import {IPlayer} from "../../interfaces/IPlayer";
import {PlayerService} from "../../core/services/player.service";
import {Router} from "@angular/router";
import {IRankedTournament} from "../../interfaces/IRankedTournament";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  public players : IPlayer[] = []
  public dataSource: MatTableDataSource<IRankedTournament> = new MatTableDataSource<IRankedTournament>([]);
  constructor(private readonly router: Router,
              private readonly playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.getAllPlayers().subscribe({
      next: res => {
        console.log(res);
        this.players = res;
      },
      error: err => console.error('error while getting artists', err)
    });
  }
}
