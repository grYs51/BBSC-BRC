import { Injectable } from '@angular/core';
import { IDiscordUser } from '../../interfaces/Discord/IDiscordUser'
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class IsLoggedInService {
  accesToken = null;
  tokenExpiration = null
  hasToken = false;
  user: IDiscordUser;
  
  constructor() { }

  getAuthUrl() {
    return environment.OAuthurl;
  }

  TokenInvalid() {
    if (+localStorage.getItem('tokenExpiration') <= Date.now())
      this.tokenClear()
  }

  tokenClear() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('tokenExpiration');
    localStorage.removeItem('discordUser');

    this.Token();
    this.User();
  }

  Token() {
    this.accesToken = localStorage.getItem('accessToken')
    this.tokenExpiration = localStorage.getItem('tokenExpiration')

    // if (this.accesToken != null) this.hasToken = true
    // else this.hasToken = false
    this.hasToken = this.thishasToken();

    
  }

  thishasToken(){
    console.log(this.accesToken != null)
    return this.accesToken != null
  }
  User() {
    this.user = JSON.parse(localStorage.getItem('discordUser'));
  }
  storeUserData(response) {
    localStorage.setItem('discordUser', JSON.stringify(response));
    this.user = response;
  }
}
