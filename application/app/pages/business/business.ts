import {Page, NavController} from 'ionic-angular';
import { Http, Response, RequestOptions, Headers } from 'angular2/http';
import {Observable} from 'rxjs/Observable';;
import {Signup} from './../signup/signup.ts';
import {Profile} from './../profile/profile.ts'; 
import {MenuController, IonicApp} from 'ionic-angular';
import {myAccount} from './../myaccount/myaccount.ts';
import {subcategory} from './../subcategory/subcategory.ts';
import {PostPage} from './../post/post.ts';
import {OfferPage} from './../offer/offer.ts'; 
import {SmallbusinessPage} from './../smallbusiness/smallbusiness.ts';
import {CategoriesPage} from './../categories/categories.ts';
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
import {Volunteerteam} from './../volunteerteam/volunteerteam.ts'
import {BusinessdetailPage} from './../businessdetail/businessdetail.ts';


class businessModel {
    title;
    comment;
    price;
    contactno;
    logo;
    images;
    location;
}

@Page({
  templateUrl: 'build/pages/business/business.html'
})
export class BusinessPage {
  nav: NavController;
   // dataObject;
    http;
    business : Array<businessModel>;
    //url = 'http://ng-smsapp.herokuapp.com/api/sms/';

  constructor(nav: NavController ,http: Http ){
        this.nav = nav;
        this.http = http;
       this.getbusiness();
        
        

      
    
  }

//Get Whole List From Server
		getbusiness(){        
	         this.http.request('http://localhost:8000/api/getsmallbusiness')
	        //this.http.request('http://localhost:3000/api/sms')
	        .subscribe((res: Response) => {
               this.business  = res.json();
	                             
	        });
	    }
  

  
      gotosub(){
          this.nav.push(subcategory);
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
       
       gotodetail(bus){
           this.nav.push(BusinessdetailPage ,bus);
       }


}
