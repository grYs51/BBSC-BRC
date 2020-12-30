import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetUserDataService {

  constructor(private http :HttpClient) { }

  getUserData(){
    return this.http.get('https://discord.com/api/v6/users/@me')
}
}
