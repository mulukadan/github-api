import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServService } from './serv.service';


import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';


@NgModule({
  declarations: [
    AppComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ ServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
