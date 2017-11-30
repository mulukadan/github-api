import { Component, OnInit } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
 user:any;
 repos:any;
 username:string;
  constructor(private _githubService:ServService) {

   }

  ngOnInit() {
  }

  search(){
    this._githubService.updateUsername(this.username);
    this._githubService.getUser().subscribe(user => {
      this.user = user;
    });

    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }

}
