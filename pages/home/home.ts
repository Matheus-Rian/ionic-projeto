import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  styleUrls: ["home.scss"]
})
export class HomePage {
  twoDataBinding = " ";
  isUnchanged = true;
  constructor(public navCtrl: NavController) {}
}
