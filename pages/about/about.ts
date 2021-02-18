import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ["about.scss"]
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  goFeed() {
    this.navCtrl.push(ContactPage);
  }

}
