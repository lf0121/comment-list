import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  show:boolean = false;

  constructor(public navCtrl: NavController) {

  }

  click(){
    this.show = !this.show;
  }

}
