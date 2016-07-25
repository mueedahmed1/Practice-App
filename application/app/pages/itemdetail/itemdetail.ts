import {Page , NavController,IONIC_DIRECTIVES, NavParams} from 'ionic-angular'; 
import {MenuController, IonicApp, Platform, ViewController} from 'ionic-angular';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Signup} from './../signup/signup.ts';
import {Profile} from './../profile/profile.ts'; 
import {myAccount} from './../myaccount/myaccount.ts';
import {subcategory} from './../subcategory/subcategory.ts';
import {PostPage} from './../post/post.ts';
import {OfferPage} from './../offer/offer.ts'; 
import {SmallbusinessPage} from './../smallbusiness/smallbusiness.ts'
import {CategoriesPage} from './../categories/categories.ts'
import {Volunteerteam} from './../volunteerteam/volunteerteam.ts'
import {BuysellPage} from './../buysell/buysell.ts';
import {CompanyofferPage} from './../companyoffer/companyoffer.ts';
import {contact} from './../contact/contact.ts';
import {Favorite} from './../favorite/favorite.ts';
import {itemlist} from './../itemlist/itemlist.ts';
import {notification} from './../notification/notification.ts';
import {setting} from './../setting/setting.ts';
import {validatep} from './../validatepage/validatepage.ts'; 
import {BusinessPage} from './../business/business.ts';
 
 
@Page({
  templateUrl: 'build/pages/itemdetail/itemdetail.html',
 // directives: [IONIC_DIRECTIVES]
})
export class itemdetail{
   
   dataObject
   options;
  
   data;
   
  // itemroot = PostPage; 
   constructor(public nav: NavController,public http: Http,public params : NavParams){
      this.data =  this.params.data;
      this.nav = nav;
      this.http = http;
      //this.httprequest();

 }
 

//  httprequest(){
//          this.http.get('./build/js/file.json')
//             .map(res => res.json())
//             .subscribe(
//                 data => this.dataObject = data,
//                 err => console.error(err)
//         );
//     }
    
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
    
 }
