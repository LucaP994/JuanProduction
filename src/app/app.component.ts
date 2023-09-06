import { Component } from '@angular/core';
import { AppContextService } from './services/app-context.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JuanProduction';
  public language: string = "";
  constructor(
    private context: AppContextService
  ){}
  ngOnInit(){
    if(navigator.language.includes("it")){
      this.language = "it";
    }else{
      this.language = "en";
    }
    this.context.changeLang(this.language);
  }
}
