import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

// for Http
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// end for Http

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any;

  constructor(public navCtrl: NavController, private http: Http) {
    this.http.get('https://api.randomuser.me/?results=20')
    .map(res => res.json())
    .subscribe(data => {
        this.users = data.results;
    }, error => {
      console.log(error);
    });
  }

  itemClicked(event, user){
    console.log('itemClicked: '+ user.name.first);
  }

  remove(user){
    console.log('remove: '+ user.name.first);
    // var i;
    for(var i=0;i<this.users.length;i++){
      if(this.users[i] == user){
        this.users.splice(i, 1);
      }
    }
  }

}
