import { Component } from '@angular/core';
import { AppContextService } from 'src/app/services/app-context.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public dropdown: boolean = false;
  public traduction: any = {};
  public home: string = "";
  public chiSiamo: string = "";
  public contattaci: string = "";
  public bnbName = environment.bnbName;
  constructor(
    private context: AppContextService
  ) { }
  ngAfterViewInit() {
    this.traduction = JSON.parse(sessionStorage.getItem("traduction")!);
    this.home = this.traduction.home;
    this.chiSiamo = this.traduction.chiSiamo;
    this.contattaci = this.traduction.contattaci;
    this.context.onLanguageChanged.subscribe(res => {
      this.traduction = JSON.parse(sessionStorage.getItem("traduction")!);
      this.home = this.traduction.home;
      this.chiSiamo = this.traduction.chiSiamo;
      this.contattaci = this.traduction.contattaci;
    })
  }
  toggleMenu() {
    let menu: HTMLElement = document.querySelector('#ham-pages')!;
    if (this.dropdown == false) {
      menu.style.height = "25vh";
      this.dropdown = true;
    } else {
      menu.style.height = "0";
      this.dropdown = false;
    }
  }
  changeLang(lang: string) {
    this.context.changeLang(lang);
  }
}
