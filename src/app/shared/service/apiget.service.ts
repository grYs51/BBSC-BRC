import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { ISignUp } from '../interfaces/ISignUP';
@Injectable({
  providedIn: 'root'
})
export class ApigetService {

  private bbscApiBaseUrl: string = environment.bbscApiBaseUrl;
  private bbscApiHeaders = new HttpHeaders().append('x-functions-key', environment.bbscApiKey);
  private overview: string = 'assets/data/overview.json';
  private beginner: string = 'assets/data/beginners.json';
  private veteran: string = 'assets/data/veterans.json';
  private addPlayer: string = 'api/AddPlayer';


  constructor(private httpClient: HttpClient) { }

  getOverview() {
    console.log(this.bbscApiBaseUrl + this.overview)
    return this.httpClient.get(this.bbscApiBaseUrl + this.overview);
  }
  getBeginnerList() {
    return this.httpClient.get(this.bbscApiBaseUrl + this.beginner);
  }
  getVeteranList() {
    return this.httpClient.get(this.bbscApiBaseUrl + this.veteran);
  }

  postPlayer(name: string, url: string) {
    return this.httpClient.post(this.bbscApiBaseUrl + this.addPlayer, { DisplayName: name, ScoresaberUrl: url }, { headers: this.bbscApiHeaders });
  }

}