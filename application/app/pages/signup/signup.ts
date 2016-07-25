import {Page, NavController, Platform, ActionSheet, NavParams, Alert} from 'ionic-angular';
import {HomePage} from './../home/home.ts';
import {Http, Response, RequestOptions, Headers} from 'angular2/http';
import { FormBuilder, Control, ControlGroup, Validators, AbstractControl} from 'angular2/common';
//import {Profile} from './../profile/profile.ts'; 
//import {Signup} from './../signup/signup.ts';
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
import {Camera} from 'ionic-native';


@Page({
    templateUrl: 'build/pages/signup/signup.html'
})
export class Signup {
    nav;
    users: user[] = [];
    isShow: boolean;
    url = 'http://localhost:8000/api/postusers';
    addButton: boolean;
    // updateButton: boolean;
    // myForm: ControlGroup;
    id: any;
    username: any;
    email: any;
    password: any;
    confirmpassword: any;
    contactno: any;
    gender:any;
    myForm;
    images: image[];
    dataObject;
    img;
    data;
    constructor(nav: NavController, public fb: FormBuilder, public http: Http, public params: NavParams) {
        this.nav = nav;
        //this.buildForm();
        this.addButton = true;
        this.data = {};
        this.data.username = "";
        this.data.email = "";
        this.data.password = "";
        this.data.contactno = "";
        this.data.confirmpassword = "";
        this.data.gender = "";
    }

    //     next(){
    //          this.nav.push(validatep);
    //             //this.uploaduserpic(this.img);  
    // }
  


    //   loader(){
    //         let loader = Alert.create({
    //             title: 'Processing...'
    //         });

    //         return {
    //             show : () => {
    //                 this.nav.present(loader);
    //                 return loader;
    //             } 
    //         }
    //     }

    onSubmit() {

        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let opts: RequestOptions = new RequestOptions();
        opts.headers = headers;
        
         var data = JSON.stringify({username : this.data.username, 
                email : this.data.email, password : this.data.password, contactno : this.data.contactno,
            confirmpassword :this.data.confirmpassword,  gender :this.data.gender})
       // var myObj = new user(form.username, form.email, form.password, form.confirmpassword, form.contactno);
        // let loader = this.loader().show();
        this.http.post(this.url,
            //this.http.post('http://localhost:3000/api/sms',
            // JSON.stringify(myObj),
            data,
            opts)
            .subscribe(
                data=>{ 
                                    this.data.response = this.data._body;
                                    console.log(this.data);
                                },error=> {
                                    console.log('signup error');
                // (res: Response) => {
                // this.users.push(res.json().newsms);

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


    captureImage() {

        let imageFromCamera = false;

        let actionSheet = ActionSheet.create({
            buttons: [
                {
                    text: 'Camera',
                    handler: () => {
                        console.log('Camera clicked');
                        imageFromCamera = true;
                        getImage();
                    }
                },
                {
                    text: 'Gallery',
                    handler: () => {
                        console.log('Gallery clicked');
                        imageFromCamera = false;
                        getImage();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });

        this.nav.present(actionSheet);

        let getImage = () => {
            //let imageFromCamera = false; (imageFromCamera ? 1 : 0)
            let options = {
                destinationType: 0,
                sourceType: (imageFromCamera ? 1 : 0),
                direction: 0,
                saveToPhotoAlbum: true
            };
            Camera.getPicture(options).then((imageData) => {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                let base64Image = "data:image/jpeg;base64," + imageData;
                //this.img = base64Image;
                // var myimage = new image(base64Image);
                let headers: Headers = new Headers();
                headers.append('Content-Type', 'application/json');
                // headers.append('mediatype', 'application/json');
                let opts: RequestOptions = new RequestOptions();
                opts.headers = headers;
                var formData: any = new FormData();
                var xhr = new XMLHttpRequest();
                formData.append("image", base64Image);

                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            (JSON.parse(xhr.response));
                        } else {
                            (xhr.response);
                        }
                    }
                }
                xhr.open("POST", 'http://localhost:8000/api/uploaduserpic/', true);
                xhr.send(formData);

                //     // this.http.request(this.url)
                //    this.http.post('http://192.168.8.100:8080/api/uploaduserpic/', JSON.stringify({ image : base64Image }),
                //                         opts)
                //     .subscribe((res: Response) => {
                //         this.dataObject = res.json();
                //             console.log(res.json());
                //             err => console.log(err);              
                //     });


            }, (err) => {
                console.log(err);
                alert(err);
            });




        }
    }
    //  uploaduserpic(image) {    

    //          let headers: Headers = new Headers();
    //                  headers.append('Content-Type', 'application/json');
    //                 // headers.append('mediatype', 'application/json');

    //                 let opts: RequestOptions = new RequestOptions();
    //                 opts.headers = headers;    

    //                    var myimage = new image(this.img); 
    // 	        // this.http.request(this.url)
    // 	       this.http.post('http://localhost:8080/api/uploaduserpic/', JSON.stringify(myimage),
    //                                 opts)
    // 	        .subscribe((res: Response) => {
    //                 this.dataObject = res.json();
    // 	                console.log(res.json());
    //                     err => console.log(err);              
    // 	        });
    // 	    }

    //  }
}


class image {
    image: string;

}
class user {
    username: string;
    email: string;
    password: string;
    confirmpassword: string;
    contactno: string;
    // mobile: string;
    // id: string


    constructor(username: string, email: string, password: string, confirmpassword: string, contactno: string) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.confirmpassword = confirmpassword;
        this.contactno = contactno;


    }
}





