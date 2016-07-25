import {NavController} from 'ionic-angular';
import {Injectable, Inject} from 'angular2/core';
import {Http, Headers} from 'angular2/http';


@Injectable() 
export class AuthService {
    static get parameters() {
        return [[Http],[NavController]];
    }
    isLoggedin :boolean;
    constructor( public  http : Http, public nav : NavController) {
        this.http = http;
        this.nav = nav;
        this.isLoggedin = false;
    }
    
    login(user) {
        var headers = new Headers();
        var creds = "name=" + user.email + "&password=" + user.password;
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        return new Promise(resolve => {
        
            this.http.post('http://localhost:8000/api/authenticate', creds, {headers: headers}).subscribe(data => {
            
            if(data.json().success){
                window.localStorage.setItem('raja', data.json().token);
            this.isLoggedin = true; }   
            resolve(this.isLoggedin);
                
        }); 
            
        });
        
        
    }
}