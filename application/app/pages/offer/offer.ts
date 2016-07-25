import {Page, NavController} from 'ionic-angular';
//import {SmallbusinessPage} from './../smallbusiness/smallbusiness.ts'
import {BusinessPage} from './../business/business.ts'
import {Signup} from './../signup/signup.ts';
import {Profile} from './../profile/profile.ts'; 
import {MenuController, IonicApp} from 'ionic-angular';
import {myAccount} from './../myaccount/myaccount.ts';
import {subcategory} from './../subcategory/subcategory.ts';
import {PostPage} from './../post/post.ts';
//import {OfferPage} from './../offer/offer.ts'; 
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
import {setting} from './../setting/setting.ts';
import {validatep} from './../validatepage/validatepage.ts';
import {Http, Response} from 'angular2/http';
import 'rxjs/add/operator/map';


class offerModel {
    title;
    description;
    name;
    contactno;
    categoryoffer;
    images;
}

@Page({
  templateUrl: 'build/pages/offer/offer.html',
})
export class OfferPage {
  nav: NavController;
  offer: Array<offerModel>;
    offers;
  constructor(nav:NavController ,public http: Http) {
    this.nav = nav;
    this.offers = "Discount";
    this.http = http;
     this.httprequest();
     
     //console.log(this.offers);
    // this.func1("");
  }
  
  
    httprequest() {
        this.http.get('http://localhost:8000/api/getcompanyoffer')
            //.map(res => res.json())
            .subscribe((res: Response) => {
                this.offer = res.json();
                // data => this.dataObject = data,
                // err => console.error(err)
            });
    }
    
    // func1(val:string){
    //     this.offers = val;            
    // }
    
    // func2(val1){
    //     this.offers = val1;
    // }
  
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
