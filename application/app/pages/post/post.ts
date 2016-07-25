import {Page, NavController} from 'ionic-angular';
import {BusinessPage} from './../business/business.ts';
import {Signup} from './../signup/signup.ts';
import {Profile} from './../profile/profile.ts'; 
import {MenuController, IonicApp} from 'ionic-angular';
import {myAccount} from './../myaccount/myaccount.ts';
import {subcategory} from './../subcategory/subcategory.ts';
//import {PostPage} from './../post/post.ts';
import {OfferPage} from './../offer/offer.ts'; 
import {SmallbusinessPage} from './../smallbusiness/smallbusiness.ts';
import {CategoriesPage} from './../categories/categories.ts';
import {Volunteerteam} from './../volunteerteam/volunteerteam.ts';
import {VolunteerPage} from './../volunteer/volunteer.ts';
import {BuysellPage} from './../buysell/buysell.ts';
import {CompanyofferPage} from './../companyoffer/companyoffer.ts';
import {contact} from './../contact/contact.ts';
import {Favorite} from './../favorite/favorite.ts';
import {itemdetail} from './../itemdetail/itemdetail.ts';
import {itemlist} from './../itemlist/itemlist.ts';
import {notification} from './../notification/notification.ts';
import {setting} from './../setting/setting.ts';
import {validatep} from './../validatepage/validatepage.ts';

@Page({
  templateUrl: 'build/pages/post/post.html',
})
export class PostPage {
  nav;
constructor(nav:NavController) {
    this.nav = nav;
  }
  
  gotovolunteer(){
      this.nav.push(Volunteerteam);
  }
  
  gotobuy(){
    this.nav.push(BuysellPage);  
  }

  gotosmall(){
      this.nav.push(SmallbusinessPage);
  }
      
 gotocompany(){
     this.nav.push(CompanyofferPage);
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
        gotovolunteerpage(){
          this.nav.push(VolunteerPage);
      }
      gotoProfile(){
           this.nav.push(Profile);
       }
       
}
