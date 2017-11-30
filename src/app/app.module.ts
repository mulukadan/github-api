import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServService } from './serv.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';



@NgModule({
  declarations: [
    AppComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [ ServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
