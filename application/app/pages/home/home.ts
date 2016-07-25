import {Page, NavController} from 'ionic-angular';
//import {AuthService} from './authservice';
import {Signup} from './../signup/signup.ts';
import {Profile} from './../profile/profile.ts';


@Page({
    templateUrl: 'build/pages/home/home.html',
     //providers: [AuthService]
})
export class HomePage {
    //     static get parameters() {
    //     return [[AuthService], [NavController]];
    // }
    nav;
    myservice;
    usercreds;
    //AuthService
    constructor( nav:NavController) {
        
        //this.myservice = AuthService;
        this.nav = nav;
        this.usercreds = {
            email: '',
            password: ''
        }
    }
    
    gotoprofile() {
        this.nav.push(Profile);

    }


    // login(usercreds) {
    //     this.myservice.login(usercreds).then(data => {
    //         if (data)
    //             this.nav.setRoot(Profile);
    //             else{
    //                 alert("Enter Correct Credentials");
    //             }
    //     })
    // }


    goto() {
        this.nav.push(Signup);

    }

}
