import 'es6-shim';
import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {CategoriesPage} from './pages/categories/categories';
import {PostPage} from './pages/post/post';
import {SmallbusinessPage} from './pages/smallbusiness/smallbusiness';
import {OfferPage} from './pages/offer/offer';
import {LanguagePage} from './pages/language/language';
//import {cloudinary} from 'cloudinary'
import 'reflect-metadata';
import 'zone.js/dist/zone-microtask';
import 'rxjs/Rx';

@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {
      tabbarplacement: 'bottom'
  } // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform) {
        platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });

  } 

}
