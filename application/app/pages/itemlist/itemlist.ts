import {Page, NavController} from 'ionic-angular';
import {Http, Response} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Signup} from './../signup/signup.ts';
import {Profile} from './../profile/profile.ts';
import {MenuController, IonicApp} from 'ionic-angular';
import {myAccount} from './../myaccount/myaccount.ts';
import {subcategory} from './../subcategory/subcategory.ts';
import {PostPage} from './../post/post.ts';
import {OfferPage} from './../offer/offer.ts';
import {SmallbusinessPage} from './../smallbusiness/smallbusiness.ts';
import {CategoriesPage} from './../categories/categories.ts';
import {Volunteerteam} from './../volunteerteam/volunteerteam.ts';
import {BuysellPage} from './../buysell/buysell.ts';
import {CompanyofferPage} from './../companyoffer/companyoffer.ts';
import {contact} from './../contact/contact.ts';
import {Favorite} from './../favorite/favorite.ts';
import {itemdetail} from './../itemdetail/itemdetail.ts';
//import {itemlist} from './../itemlist/itemlist.ts';
import {notification} from './../notification/notification.ts';
import {setting} from './../setting/setting.ts';
import {validatep} from './../validatepage/validatepage.ts';
import {BusinessPage} from './../business/business.ts';


class listModel {
    title;
    comment;
    price;
    contactno;
    category;
    subcategory;
    images;
}

@Page({
    templateUrl: 'build/pages/itemlist/itemlist.html'
})

export class itemlist {
    searchQuery: string = '';
    lists: Array<listModel>;
    dataObject;
    http;
    nav;
    list;
    constructor(nav: NavController, http: Http) {
        this.nav = nav;
        this.http = http;
        this.httprequest();

        console.log(nav.id);



    }


    httprequest() {
        this.http.get('http://localhost:8000/api/getitem')
            //.map(res => res.json())
            .subscribe((res: Response) => {
                this.lists = res.json();
                // data => this.dataObject = data,
                // err => console.error(err)
            });
    }
    gotodetail(item) {
        this.nav.push(itemdetail, item);

    }

    getItems(searchbar) {
        // Reset items back to all of the items
        // this.initializeItems();

        // set q to the value of the searchbar
        var q = searchbar.value;

        // if the value is an empty string don't filter the items
        if (q.trim() == '') {
            return;
            // }

            // this.items = this.items.filter((v) => {
            //   if (v.toLowerCase().indexOf(q.toLowerCase()) > -1) {
            //     return true;
            //   }
            //   return false;
            // })
        }
    }

    gotopost() {
        this.nav.push(PostPage);
    }

    gotooffer() {
        this.nav.push(OfferPage);
    }

    gotobusiness() {
        this.nav.push(BusinessPage);
    }
    gotocategory() {
        this.nav.push(CategoriesPage);
    }
    gotovolunteer() {
        this.nav.push(Volunteerteam);
    }



}

