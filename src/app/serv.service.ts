import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ServService {
      private username = 'mulukadan';
      // private client_id = '648584e422fcc98d6211';
      // private client_secret = '900fd64fcfc038fdfdac47776a5b6051d2a9ba44';
      private token = '?access_token=cc4eae6c3054a503473ba8b8627de6198e05c890';
  constructor(private _http:Http) {
      }
  getUser(){
    return this._http.get('https://api.github.com/users/' + this.username+this.token)
    .map(res => res.json());
  }
  getRepos(){
    return this._http.get('https://api.github.com/users/' + this.username +'/repos'+this.token)
    .map(res => res.json());
  }
  updateUsername(username:string){
    this.username=username;
  }
}
