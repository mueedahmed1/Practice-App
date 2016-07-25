import {Page , NavController} from 'ionic-angular';
import {AuthService} from './../home/authservice';
import {HomePage} from './../home/home.ts'; 
//import {Signup} from './../signup/signup.ts'; 
import {Signup} from './../signup/signup.ts';
//import {Profile} from './../profile/profile.ts'; 
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
import {validatep} from './../validatepage/validatepage.ts';

@Page({
  templateUrl: 'build/pages/profile/profile.html'
})
export class Profile {
    nav;
    isLoggedin :boolean;
    constructor(nav:NavController){
        this.nav = nav;
    }
     gotoaccount(){
      this.nav.push(myAccount);
  }
      gotonotification(){
      this.nav.push(notification);
  }
   
  gotofavorite(){
      this.nav.push(Favorite);
  }

     gotocontact(){
      this.nav.push(contact);
  }
    gotosetting(){
      this.nav.push(setting);
  }
      
   
    
    logout() {
        this.isLoggedin = false;
        window.localStorage.clear();
        this.nav.push(HomePage);
    }
    
   
}
