import {Page, NavController} from 'ionic-angular';
import {Signup} from './../signup/signup.ts';
import {Profile} from './../profile/profile.ts'; 
import {MenuController, IonicApp} from 'ionic-angular';
import {myAccount} from './../myaccount/myaccount.ts';
import {subcategory} from './../subcategory/subcategory.ts';
import {PostPage} from './../post/post.ts';
import {OfferPage} from './../offer/offer.ts'; 
import {SmallbusinessPage} from './../smallbusiness/smallbusiness.ts'
//import {CategoriesPage} from './../categories/categories.ts'
import {Volunteerteam} from './../volunteerteam/volunteerteam.ts';
import {CompanyofferPage} from './../companyoffer/companyoffer.ts';
import {contact} from './../contact/contact.ts';
import {Favorite} from './../favorite/favorite.ts';
import {itemdetail} from './../itemdetail/itemdetail.ts';
import {itemlist} from './../itemlist/itemlist.ts';
import {notification} from './../notification/notification.ts';
import {setting} from './../setting/setting.ts';
import {validatep} from './../validatepage/validatepage.ts';
import {BusinessPage} from './../business/business.ts';


@Page({
  templateUrl: 'build/pages/categories/categories.html',
})
export class CategoriesPage {
  nav;
  images = [
      {image1:"images/13.png", title: "Property"},
      {image1:"images/2.png", title: "Motors"},    
      {image1:"images/1.png", title: "Teaching"},
      {image1:"images/5.png", title: "Computers"},
      {image1:"images/3.png", title: "Birds & Animals"},
      {image1:"images/14.png", title: "Jobs & Services"},
      {image1:"images/4.png", title: "Mobiles"},
      {image1:"images/10.png", title: "Gifts"},
      {image1:"images/11.png", title: "Miscellaneous"},
      {image1:"images/6.png", title: "Salons"},
      {image1:"images/9.png", title: "Furniture"},
      {image1:"images/12.png", title: "Men's need"},
      {image1:"images/8.png", title: "Women's need"},
      {image1:"images/7.png", title: "Children's need"},
        {image1:"images/10.png", title: "Gifts"},
      {image1:"images/11.png", title: "Miscellaneous"},
      {image1:"images/6.png", title: "Salons"},
      {image1:"images/9.png", title: "Furniture"},
      {image1:"images/12.png", title: "Men's need"},
      {image1:"images/8.png", title: "Women's need"},
      {image1:"images/7.png", title: "Children's need"}
  ];
  
  
  images2 = [];
  constructor(nav:NavController){
    this.nav = nav;
    this.images;
    this.images2;
    
    
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

}
