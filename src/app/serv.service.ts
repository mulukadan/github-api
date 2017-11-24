import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ServService {
      private username = 'mulukadan';
      private client_id = '648584e422fcc98d6211';
      private client_secret = '900fd64fcfc038fdfdac47776a5b6051d2a9ba44';
  constructor() { 
      console.log('Github Service Init....');
  }

}
