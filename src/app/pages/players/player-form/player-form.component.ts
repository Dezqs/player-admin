import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {GameService} from "../../../core/services/game.service";

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent {

  public playerForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<PlayerFormComponent>,
  private readonly gameService: GameService,
  private readonly fb: FormBuilder) {
    this.playerForm = this.buildForm()
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      pseudo: ['', Validators.required],
      tournament: ['', Validators.required],
      points: ['', Validators.required]
    });
  }

  public cancel(): void {
    this.dialogRef.close();
  }

  public addGame() {
    const game = {
      playerPseudo: this.playerForm.value['pseudo'],
      tournament: this.playerForm.value['tournament'],
      points: this.playerForm.value['points']
    }

    this.gameService.addGame(game).subscribe({
      next: res => this.dialogRef.close(res),
      error: err => console.error('error while saving artist', err)
    })
  }
}
