import { Injectable, Output, EventEmitter } from '@angular/core';
import traductions from '../../assets/traductions.json';

@Injectable({
  providedIn: 'root'
})
export class AppContextService {
  @Output() onLanguageChanged = new EventEmitter<boolean>();
  constructor() { }
  private traduction = {};
  changeLang(lang:string){
    if(lang === 'it'){
      this.traduction = traductions.it;
    }else{
      this.traduction = traductions.en;
    }
    sessionStorage.setItem('lang',lang);
    sessionStorage.setItem("traduction", JSON.stringify(this.traduction));
    this.onLanguageChanged.emit(true);
  }
}
