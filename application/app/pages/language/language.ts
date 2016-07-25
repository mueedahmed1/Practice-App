import {Page, NavController} from 'ionic-angular';
import {validatep} from './../validatepage/validatepage.ts';


@Page({
  templateUrl: 'build/pages/language/language.html',
})
export class LanguagePage {
  
  
  nav;
  constructor(nav:NavController) {
    this.nav = nav;
  }
}
