import {Page, NavController,NavParams} from 'ionic-angular';
import {Signup} from './../signup/signup.ts';
import {Profile} from './../profile/profile.ts'; 
import {MenuController, IonicApp} from 'ionic-angular';
import {myAccount} from './../myaccount/myaccount.ts';
import {subcategory} from './../subcategory/subcategory.ts';
import {PostPage} from './../post/post.ts';
import {OfferPage} from './../offer/offer.ts'; 
import {SmallbusinessPage} from './../smallbusiness/smallbusiness.ts'
import {CategoriesPage} from './../categories/categories.ts'
import {Volunteerteam} from './../volunteerteam/volunteerteam.ts';
import {BuysellPage} from './../buysell/buysell.ts';
//import {CompanyofferPage} from './../companyoffer/companyoffer.ts';
import {contact} from './../contact/contact.ts';
import {Favorite} from './../favorite/favorite.ts';
import {itemdetail} from './../itemdetail/itemdetail.ts';
import {itemlist} from './../itemlist/itemlist.ts';
import {notification} from './../notification/notification.ts';
import {setting} from './../setting/setting.ts';
import {validatep} from './../validatepage/validatepage.ts';
import {BusinessPage} from './../business/business.ts';
import {Http, Response, RequestOptions, Headers} from 'angular2/http';
import { FormBuilder, Control, ControlGroup, Validators, AbstractControl} from 'angular2/common';

@Page({
  templateUrl: 'build/pages/companyoffer/companyoffer.html',
})
export class CompanyofferPage {
   nav: NavController;
    comoffers: comoffer[] = [];
    addButton: boolean;
    url = 'http://localhost:8000/api/postcompanyoffer';
    title: any;
    description: any;
    name: any;
    contactno: any;
    images: image[];
    categoryoffer :any;
    data;
    
    
     categories = [
        "Discount",
        "Lowest Cost",
     ]
    myForm;
    constructor(nav: NavController, public fb: FormBuilder, public http: Http, public params: NavParams) {
        this.nav = nav;
        this.data = {};
        this.data.title = "";
        this.data.description = "";
        this.data.name = "";
        this.data.contactno = "";
        this.data.categoryoffer = "";
        
        
        this.categoryoffer = '';
        
    //    this.buildForm();
        this.addButton = true;
    }
  
 
   

    // buildForm() {

    //     this.myForm = this.fb.group({
    //         'title': ['',Validators.required],
    //         'description': ['', Validators.required],
    //         'name': ['', Validators.required],
    //         'contactno': [, Validators.required],
    //         'categoryoffer': ['', Validators.required],
    //         //'contactno': ['', Validators.required],
    //         //'mobile': ['', Validators.required]
    //     });

    //     this.title = this.myForm.controls['title']
    //     this.description = this.myForm.controls['description']
    //     this.name = this.myForm.controls['name']
    //     this.contactno = this.myForm.controls['contactno']
    //     this.categoryoffer = this.myForm.controls['categoryoffer']
    //     //this.contactno = this.myForm.controls['contactno']

    // }
    
       onSubmit() {
           
                
                let headers: Headers = new Headers();
                headers.append('Content-Type', 'application/json');

                let opts: RequestOptions = new RequestOptions();
                opts.headers = headers;
            
            var data = JSON.stringify({title : this.data.title, 
                name : this.data.name, contactno : this.data.contactno, description : this.data.description,
            categoryoffer :this.data.categoryoffer })
                //    var myObj = new comoffer(form.title, form.description,form.name,form.contactno, form.categoryoffer);        
                    // let loader = this.loader().show();
                    this.http.post(this.url,
                        //this.http.post('http://localhost:3000/api/sms',
                                data, opts)
                                .subscribe(data=>{ 
                                    this.data.response = this.data._body;
                                    console.log(this.data);
                                },error=> {
                                    console.log('dasgdaj')
                                
                            });
                                  
                            //     this.buildForm();

                        //         let alert = Alert.create({
						// 	      title: 'Congratulations',
						// 	      subTitle: 'The New Student Has Been Added',
						// 	      buttons: ['Ok'],							      
						// 	    });
						// 	    this.nav.present(alert);
						// 	    loader.destroy();
                        //         //this.isShow = true; 
                        //         //this.getSMS(); 
                  
                                      
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
class comoffer{
    title;
    comment;
    price;
    location;
    //subcategory;
    contactno;
    constructor(title:string, comment: string, price: string, location:string, contactno:string){
        this.title = title;
        this.comment = comment;
        this.price = price;
        this.location = location;
       // this.subcategory = subcategory;
        this.contactno = contactno;
    }
}
