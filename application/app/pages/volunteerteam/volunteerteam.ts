import {Page, NavController} from 'ionic-angular';
import {BusinessPage} from './../business/business.ts'
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
import {validatep} from './../validatepage/validatepage.ts';
import { Http, Response, RequestOptions, Headers } from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {VolunteerdetailPage} from './../volunteerdetail/volunteerdetail.ts'

class volunteerModel {
    title;
    comment;
    price;
    contactno;
    logo;
    images;
    location;
}


@Page({
  templateUrl: 'build/pages/volunteerteam/volunteerteam.html',
})
export class Volunteerteam {
    nav: NavController;
   // dataObject;
    http;
    volunteer : Array<volunteerModel>;

  constructor(nav:NavController, http : Http) {
    this.nav = nav;
      this.http = http;
       this.getvolunteer();
  }
  
  getvolunteer(){        
	         this.http.request('http://localhost:8000/api/getvolunteer')
	        //this.http.request('http://localhost:3000/api/sms')
	        .subscribe((res: Response) => {
               this.volunteer  = res.json();
	                             
	        });
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
       gotodetail(vol){
             this.nav.push(VolunteerdetailPage, vol);
       }
  
}
