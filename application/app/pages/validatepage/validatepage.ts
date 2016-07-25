import {Page , NavController} from 'ionic-angular';
import {HomePage} from './../home/home.ts'; 
import {Signup} from './../signup/signup.ts';
import {Profile} from './../profile/profile.ts'; 
import {MenuController, IonicApp} from 'ionic-angular';
import {myAccount} from './../myaccount/myaccount.ts';
import {subcategory} from './../subcategory/subcategory.ts';
import {PostPage} from './../post/post.ts';
import {OfferPage} from './../offer/offer.ts'; 
import {SmallbusinessPage} from './../smallbusiness/smallbusiness.ts'
import {CategoriesPage} from './../categories/categories.ts'
import {VolunteerPage} from './../volunteer/volunteer.ts'
import {BuysellPage} from './../buysell/buysell.ts';
import {CompanyofferPage} from './../companyoffer/companyoffer.ts';
import {contact} from './../contact/contact.ts';
import {Favorite} from './../favorite/favorite.ts';
import {itemdetail} from './../itemdetail/itemdetail.ts';
import {itemlist} from './../itemlist/itemlist.ts';
import {notification} from './../notification/notification.ts';
import {setting} from './../setting/setting.ts';
//import {validatep} from './../validatepage/validatepage.ts'; 
import {LanguagePage} from './../language/language.ts'; 
 
 
@Page({
  templateUrl: 'build/pages/validatepage/validatepage.html'
})
export class validatep {
  nav;
  constructor(nav:NavController){
      this.nav = nav;
  }
  
  
  gotoprofile(){
      this.nav.push(Profile);
  }
  
  gotoaccount(){
      this.nav.push(myAccount);
  }
  
  gotolanguage(){
      this.nav.push(LanguagePage);
  }
}
