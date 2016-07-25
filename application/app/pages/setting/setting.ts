import {Page, NavController} from 'ionic-angular';
import {PostPage} from './../post/post.ts';
import {BusinessPage} from './../business/business.ts'
import {Signup} from './../signup/signup.ts';
import {Profile} from './../profile/profile.ts'; 
import {MenuController, IonicApp} from 'ionic-angular';
import {myAccount} from './../myaccount/myaccount.ts';
import {subcategory} from './../subcategory/subcategory.ts';
import {OfferPage} from './../offer/offer.ts'; 
import {SmallbusinessPage} from './../smallbusiness/smallbusiness.ts'
import {CategoriesPage} from './../categories/categories.ts'
import {Volunteerteam} from './../volunteerteam/volunteerteam.ts'
import {BuysellPage} from './../buysell/buysell.ts';
import {CompanyofferPage} from './../companyoffer/companyoffer.ts';
import {contact} from './../contact/contact.ts';
import {Favorite} from './../favorite/favorite.ts';
import {itemdetail} from './../itemdetail/itemdetail.ts';
import {itemlist} from './../itemlist/itemlist.ts';
import {notification} from './../notification/notification.ts';
//import {setting} from './../setting/setting.ts';
import {validatep} from './../validatepage/validatepage.ts';


@Page({
  templateUrl: 'build/pages/setting/setting.html',
})
export class setting {
  
  nav:NavController;

  constructor(nav:NavController) {
    this.nav = nav;
  }
  
     gotopost(){
          this.nav.push(PostPage);
      }
      
      gotooffer(){
           this.nav.push(OfferPage);
      }
      
      gotobusiness(){
          this.nav.push(BusinessPage);
      }
       gotocategory(){
          this.nav.push(CategoriesPage);
      }
       gotovolunteer(){
          this.nav.push(Volunteerteam);
      }
       gotoProfile(){
           this.nav.push(Profile);
       }
}
