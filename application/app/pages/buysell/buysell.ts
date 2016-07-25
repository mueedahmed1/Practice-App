import {Page, NavController,Platform, ActionSheet, NavParams, Alert} from 'ionic-angular';
import {Http, Response, RequestOptions, Headers} from 'angular2/http';
import { FormBuilder, Control, ControlGroup, Validators, AbstractControl,FORM_DIRECTIVES} from 'angular2/common';
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
import {CompanyofferPage} from './../companyoffer/companyoffer.ts';
import {contact} from './../contact/contact.ts';
import {Favorite} from './../favorite/favorite.ts';
import {itemdetail} from './../itemdetail/itemdetail.ts';
import {itemlist} from './../itemlist/itemlist.ts';
import {notification} from './../notification/notification.ts';
import {setting} from './../setting/setting.ts';
import {validatep} from './../validatepage/validatepage.ts';
import {BusinessPage} from './../business/business.ts';
import {Volunteerteam} from './../volunteerteam/volunteerteam.ts';


@Page({
    templateUrl: 'build/pages/buysell/buysell.html',
})
export class BuysellPage {

    nav: NavController;
    item :  items[] = [];
    url = 'http://localhost:8000/api/postitem';
    title : any;
    comment : any;
    price: any;
    contactno: any;
    images : any;
    category: any;
    subcategory: any; 
    myForm;
    data;
    addButton: boolean;
    categories = [
        "Property",
        "Motors",
        "Teaching",
        "Computers",
        "Birds & Animals",
        "Jobs & Services",
        "Mobiles",
        "Gifts",
        "Miscellaneous",
        "Salons",
        "Furniture",
        "Men's need",
        "Women's need",
        "Childern's need"
    ];
    
    subcategories = [
        "House",
        "Flat",
        "Apartment",
        "Car",
        "Bike",
        "cycle",
        "Mathematics",
        "physics",
        "Desktop",
        "Laptop",
        "Cow",
        "Goat",
        "Parrot",
        "Sparrow"
    ]

    constructor(nav: NavController, public fb: FormBuilder, public http : Http, public params : NavParams) {
        this.nav = nav;
       // this.buildForm();
        this.addButton = true;
        this.data = {};
        this.data.title = "";
        this.data.comment = "";
        this.data.price = "";
        this.data.contactno = "";
        this.data.category = "";
        this.data.subcategory = "";
    }
    
    // buildForm(){
        
    //      this.myForm = this.fb.group({
	//         'title':['', Validators.required],
	//         'comment':['', Validators.required],
	//         'price': ['', Validators.required],
	//         'contactno': ['', Validators.required],
	//         'category': ['', Validators.required],
	//         'subcategory': ['', Validators.required]
	//         //'mobile': ['', Validators.required]
    // 	});  
    
	// 	this.title = this.myForm.controls['title']
    //     this.comment = this.myForm.controls['comment']
    //     this.price = this.myForm.controls['price']
    //     this.contactno = this.myForm.controls['contactno']
    //     this.category = this.myForm.controls['category']
    //     this.subcategory = this.myForm.controls['subcategory']
         
    // }
    
     onSubmit()  {
                
                let headers: Headers = new Headers();
                headers.append('Content-Type', 'application/json');

                let opts: RequestOptions = new RequestOptions();
                opts.headers = headers;
            
            var data = JSON.stringify({title : this.data.title, 
                price : this.data.price, contactno : this.data.contactno, comment : this.data.comment,
            category :this.data.category,  subcategory :this.data.subcategory})
                   // var myObj = new items(form.title, form.comment, form.price, form.contactno, form.category, form.subcategory);        
                    // let loader = this.loader().show();
                    this.http.post(this.url,
                        //this.http.post('http://localhost:3000/api/sms',
                                //JSON.stringify(myObj),
                                data,
                                opts )
                                .subscribe(data=>{ 
                                    this.data.response = this.data._body;
                                    console.log(this.data);
                                },error=> {
                                    console.log('buysellerror');
                                    //(res: Response) => {
                                //this.item.push(res.json());
                                  
                                 //this.buildForm();

                      
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

class items{
    title;
    comment;
    price;
    category;
    subcategory;
    contactno;
    constructor(title:string, comment: string, price: string, category:string, subcategory: string, contactno:string){
        this.title = title;
        this.comment = comment;
        this.price = price;
        this.category = category;
        this.subcategory = subcategory;
        this.contactno = contactno;
    }
}
