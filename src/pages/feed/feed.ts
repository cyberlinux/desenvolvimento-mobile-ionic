import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nomeUsuario:string = "Allan Lima - Código";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /*public somaDoisNumeros(num1:numeric, num2:numeric) : void {
    alert("Resultado = " + (num1 + num2));
  }*/

  ionViewDidLoad() {
    // this.somaDoisNumeros(10, 99);
  }

}
