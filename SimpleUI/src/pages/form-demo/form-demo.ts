import { Component } from '@angular/core';
// import { NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';


/*
  Generated class for the FormDemo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-form-demo',
  templateUrl: 'form-demo.html'
})
export class FormDemoPage {
  login = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private formBuilder: FormBuilder) {
    this.login = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  loginForm() {
    console.log('username: ' + this.login.value.username);
    console.log('password: ' + this.login.value.password);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FormDemoPage');
  }

}
