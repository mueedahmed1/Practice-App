import {Injectable} from 'angular2/core';  
import {Http, Headers} from 'angular2/http';

@Injectable()
export class itemservices {  
    constructor(private http: Http) {
    }

    getRepos(username) {
        let repos = this.http.get(`https://api.github.com/users/${username}/repos`);
        return repos;
    }
}