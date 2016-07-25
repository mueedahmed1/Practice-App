import {Page, NavController, NavParams} from 'ionic-angular';
import {BusinessPage} from './../business/business.ts'
import {Signup} from './../signup/signup.ts';
import {Profile} from './../profile/profile.ts';
import {MenuController, IonicApp} from 'ionic-angular';
import {myAccount} from './../myaccount/myaccount.ts';
import {subcategory} from './../subcategory/subcategory.ts';
import {PostPage} from './../post/post.ts';
import {OfferPage} from './../offer/offer.ts';
import {SmallbusinessPage} from './../smallbusiness/smallbusiness.ts';
import {CategoriesPage} from './../categories/categories.ts';
//import {VolunteerPage} from './../volunteer/volunteer.ts'
import {Volunteerteam} from './../volunteerteam/volunteerteam.ts';
import {BuysellPage} from './../buysell/buysell.ts';
import {CompanyofferPage} from './../companyoffer/companyoffer.ts';
import {contact} from './../contact/contact.ts';
import {Favorite} from './../favorite/favorite.ts';
import {itemdetail} from './../itemdetail/itemdetail.ts';
import {itemlist} from './../itemlist/itemlist.ts';
import {notification} from './../notification/notification.ts';
import {setting} from './../setting/setting.ts';
import {validatep} from './../validatepage/validatepage.ts';
import {Http, Response, RequestOptions, Headers} from 'angular2/http';
import { FormBuilder, Control, ControlGroup, Validators, AbstractControl} from 'angular2/common';


@Page({
    templateUrl: 'build/pages/volunteer/volunteer.html',
})
export class VolunteerPage {
    nav: NavController;
    volunteer: volunteer[] = [];
    addButton: boolean;
    url = 'http://localhost:8000/api/postvolunteer';
    title: any;
    comment: any;
    price: any;
    contactno: any;
    images: image[];
    logo: image[];
    location: any;
    myForm;
    data;
    constructor(nav: NavController, public fb: FormBuilder, public http: Http, public params: NavParams) {
        this.nav = nav;
        //this.buildForm();
        this.addButton = true;
        this.data = {};
        this.data.title = "";
        this.data.comment = "";
        this.data.price = "";
        this.data.contactno = "";
        this.data.location = "";
        
        
    }


    // buildForm() {

    //     this.myForm = this.fb.group({
    //         'title': ['', Validators.required],
    //         'comment': ['', Validators.required],
    //         'price': ['', Validators.required],
    //         'contactno': [, Validators.required],
    //         'location': ['', Validators.required],
    //         //'contactno': ['', Validators.required],
    //         //'mobile': ['', Validators.required]
    //     });

    //     this.title = this.myForm.controls['title']
    //     this.comment = this.myForm.controls['comment']
    //     this.price = this.myForm.controls['price']
    //     this.contactno = this.myForm.controls['contactno']
    //     this.location = this.myForm.controls['location']
    //     //this.contactno = this.myForm.controls['contactno']

    // }

    onSubmit(form): void {

        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        var data = JSON.stringify({title : this.data.title, 
                price : this.data.price, contactno : this.data.contactno, comment : this.data.comment,
            category :this.data.location})
        // var myObj = new volunteer(form.title, form.comment, form.price, form.location, form.contactno);
        // let loader = this.loader().show();
        this.http.post(this.url,
            //this.http.post('http://localhost:3000/api/sms',
            // JSON.stringify(myObj),
            data,
            opts)
            .subscribe(data=>{ 
                                    this.data.response = this.data._body;
                                    console.log(this.data);
                                },error=> {
                                    console.log('volunteer-error');
                //this.volunteer.push(res.json().newsms);

                //this.buildForm();

                //         let alert = Alert.create({
                // 	      title: 'Congratulations',
                // 	      subTitle: 'The New Student Has Been Added',
                // 	      buttons: ['Ok'],							      
                // 	    });
                // 	    this.nav.present(alert);
                // 	    loader.destroy();
                //         //this.isShow = true; 
                //         //this.getSMS(); 
            });

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
    gotoProfile() {
        this.nav.push(Profile);
    }
}


class volunteer {
    title;
    comment;
    price;
    location;
    //subcategory;
    contactno;
    constructor(title: string, comment: string, price: string, location: string, contactno: string) {
        this.title = title;
        this.comment = comment;
        this.price = price;
        this.location = location;
        // this.subcategory = subcategory;
        this.contactno = contactno;
    }
}
