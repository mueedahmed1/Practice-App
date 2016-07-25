import {Page , NavController} from 'ionic-angular';
import {Camera} from 'ionic-native';
import {Device} from 'ionic-native';
import {BusinessPage} from './../business/business.ts' ;
import {Signup} from './../signup/signup.ts';
import {Profile} from './../profile/profile.ts'; 
import {MenuController, IonicApp} from 'ionic-angular';
import {subcategory} from './../subcategory/subcategory.ts';
import {PostPage} from './../post/post.ts';
import {OfferPage} from './../offer/offer.ts'; 
import {SmallbusinessPage} from './../smallbusiness/smallbusiness.ts';
import {CategoriesPage} from './../categories/categories.ts';
import {VolunteerPage} from './../volunteer/volunteer.ts';
import {BuysellPage} from './../buysell/buysell.ts';
import {CompanyofferPage} from './../companyoffer/companyoffer.ts';
import {Favorite} from './../favorite/favorite.ts';
import {itemdetail} from './../itemdetail/itemdetail.ts';
import {itemlist} from './../itemlist/itemlist.ts';
import {notification} from './../notification/notification.ts';
import {setting} from './../setting/setting.ts';
import {validatep} from './../validatepage/validatepage.ts';
import {Http, Response} from 'angular2/http';
import 'rxjs/add/operator/map';



  class listModel {
    title;
    comment;
    price;
    contactno;
    category;
    subcategory;
    images;
}

class offerModel {
    title;
    description;
    name;
    contactno;
    categoryoffer;
    images;
}
  
@Page({
  templateUrl: 'build/pages/myaccount/myaccount.html'
})
export class myAccount{
   nav;
   postpage;
   offerpage;
   myacc;
   lists : Array<listModel>;
   offer: Array<offerModel>;
    constructor(nav:NavController,public http: Http){
      this.nav= nav;
      this.http = http;
      this.postpage = PostPage;
      this.offerpage = OfferPage;
      this.myacc = "favorites";
    }
    
     httprequestforlist() {
        this.http.get('http://localhost:8000/api/getitem')
            //.map(res => res.json())
            .subscribe((res: Response) => {
                this.lists = res.json();
                // data => this.dataObject = data,
                // err => console.error(err)
            });
    }
    
    
     httprequestforoffer() {
        this.http.get('http://localhost:8000/api/getcompanyoffer')
            //.map(res => res.json())
            .subscribe((res: Response) => {
                this.offer = res.json();
                // data => this.dataObject = data,
                // err => console.error(err)
            });
    }
    
    gotodetail(item) {
        this.nav.push(itemdetail, item);

    }
    
    //   gocategory(){
    //       this.nav.push(category);
    //   }
      
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
          this.nav.push(VolunteerPage);
      }
      gotoProfile(){
           this.nav.push(Profile);
       }
}
