import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApigetService } from 'src/app/shared/service/apiget.service'
import { NgForm } from '@angular/forms';
import { DiscordLoginService } from 'src/app/shared/service/Discord/discord-login.service'
import { IsLoggedInService } from 'src/app/shared/service/Discord/is-logged-in.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  isBusy = false;

  constructor(private api: ApigetService,
    private snackBar: MatSnackBar,
    public discordLogin:  DiscordLoginService,
    public islogged: IsLoggedInService ) { }

  ngOnInit(): void {
  }
  enter(playerEntry: NgForm) {

    if (this.isBusy) return;
    this.isBusy = true;
    this.api.postPlayer(playerEntry.value.displayName, playerEntry.value.scoresaverUrl).subscribe(resp => {
      playerEntry.resetForm();
      this.snackBar.open('Let\'s hit some bloq!', 'Ok', { politeness: 'assertive', duration: 5000 });
      this.isBusy = false;
    }, error => {
      console.log(error);
      this.snackBar.open('An error occurred', 'Awww', { politeness: 'assertive', duration: 5000 });
      this.isBusy = false;
    })

  }
}
