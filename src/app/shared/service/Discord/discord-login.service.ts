import { Injectable } from '@angular/core';
import { GetUserDataService } from './get-user-data.service';
import { IsLoggedInService } from './is-logged-in.service';

@Injectable({
  providedIn: 'root'
})
export class DiscordLoginService {

  constructor( private isLogged: IsLoggedInService,
    private discordLogin: GetUserDataService) { }

  tokenType: string;
  accessToken: string;
  tokenExpiration: number;

  // popup related
  private windowHandle: Window;   // reference to the window object we will create    
  private intervalId: any = null;  // For setting interval time between we check for authorization code or token
  private loopCount = 600;   // the count until which the check will be done, or after window be closed automatically.
  private intervalLength = 100;   // the gap in which the check will be done for code.

  doAuthorization(isUser : boolean, url:string, isRegisterAction: boolean) {
    /* isRegisterAction flag i am using to check if the process is for registration or Login */
    /* socialMediaProvider is for name of social media , it is optional*/

    let loopCount = this.loopCount;

    /* Create the window object by passing url and optional window title */
    this.windowHandle = this.createOauthWindow(url, 'OAuth login');

    /* Now start the timer for which the window will stay, and after time over window will be closed */
    this.intervalId = window.setInterval(() => {
      if (loopCount-- < 0) {
        window.clearInterval(this.intervalId);
        this.windowHandle.close();
      } else {
        let href: string;  // For referencing window url
        try {

          href = this.windowHandle.location.href; // set window location to href string
        } catch (e) {
          //console.log('Error:', e); // Handle any errors here
        }
        if (href != null) {
          if(href.endsWith('authorized'))
            this.windowHandle.close();
          // Method for getting query parameters from query string
          const getQueryString = function (field: any, url: string) {
            const windowLocationUrl = url ? url : href;
            const reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
            const string = reg.exec(windowLocationUrl);
            return string ? string[1] : null;
          };
          /* As i was getting code and oauth-token i added for same, you can replace with your expected variables */
          
          if (href.match('error')) {
            window.clearInterval(this.intervalId);
            this.windowHandle.close();
          }

          else if (href.match('access_token') && isUser) {
            // for discord
            window.clearInterval(this.intervalId);
            //this.tokenType = getQueryString('token_type', href);
            this.accessToken = getQueryString('access_token', href);
            this.tokenExpiration = +new Date() + +(getQueryString('expires_in', href)) * 1000;
            //localStorage.setItem('tokenType', this.tokenType);
            localStorage.setItem('accessToken', this.accessToken);
            localStorage.setItem('tokenExpiration', this.tokenExpiration + '')

            
            this.isLogged.Token();
            this.windowHandle.close();
            
            this.discordLogin.getUserData().subscribe(res => {
              this.isLogged.storeUserData(res);
            })
            if (isRegisterAction) {
              /* call signup method */
            } else {
              /* call login method */
            }
          }
          else if(href.match('authorized') && !isUser){
            window.clearInterval(this.intervalId);
            this.windowHandle.close();
          }
          
        }
      }
    }, this.intervalLength);
  }

  createOauthWindow(url: string, name = 'Authorization', width = 500, height = 600, left = 0, top = 0) {
    if (url == null) {
      return null;
    }
    const options = `width=${width},height=${height},left=${left},top=${top}`;
    return window.open(url, name, options);
  }
}
