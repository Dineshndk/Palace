import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  images = [
    {path: './../../assets/images/Dinning_1.png'},
    /* {path: './../../assets/images/Dinning_2.png'},
    {path: './../../assets/images/Dinning_3.png'}, */
    {path: './../../assets/images/Dinning_4.png'},
  ]

  public name:string = "Queen";

  public arLanguage:any[] = [{"value":"en"},{"value":"thai"}];

  constructor(public translate:TranslateService){
    translate.setDefaultLang("en");
  }
  
  switchLanguage(event: any) {
    // Set the current language
    this.translate.use(event.value);
  }
}
