import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { SQLite } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private name: string;
  private sqliteData: Array<Object>;

  private sqliteStorage: SQLite;

  constructor(public navCtrl: NavController, private localStorage: Storage) {
    // saving data into local storage
    this.localStorage.set('name', 'Lawrence Zhou');

    // initialize sqlite database
    this.sqliteData = [];
    this.sqliteStorage = new SQLite();
    this.sqliteStorage.openDatabase({
      name: 'data.db',
      location: 'default'
    }).then(() => {
      this.sqliteStorage.executeSql('CREATE TABLE IF NOT EXISTS users(name VARCHAR(32))', {}).then(() => {
        console.log('Execute sql successfully');
      }, (err) => {
        console.error('Unable to execute sql: ', err);
      });
    }, (err) => {
      console.error('Unable to open database: ', err);
    });
  }

// saving data into sqlite database
  saveDataToSQLite(name) {
    this.sqliteStorage.openDatabase({
      name: 'data.db',
      location: 'default'
    }).then(() => {
      let query = "INSERT OR REPLACE INTO users VALUES (?)";
      this.sqliteStorage.executeSql(query, [name]).then(() => {
        console.log('Save data successfully');
      },(err) => {
        console.error('Unable to save data: ', err);
      });
    }, (err) => {
        console.error('Unable to open database: ', err);
    });
  }

  showSqliteData() {
    this.sqliteStorage.openDatabase({
      name: 'data.db',
      location: 'default'
    }).then(() => {
      this.sqliteStorage.executeSql("SELECT * FROM users", []).then((data) => {
          console.log('search data...');
          this.sqliteData = [];
          if(data.rows.length > 0) {
              for(var i = 0; i < data.rows.length; i++) {
                  this.sqliteData.push({name: data.rows.item(i).name});
              }
          }
      }, (error) => {
          console.log("ERROR: " + JSON.stringify(error));
      });
    }, (err) => {
        console.error('Unable to open database: ', err);
    });
  }

  showLocalStorage() {
    this.localStorage.get('name').then((data) => {
      console.log('name: ' + data);
      this.name = data;
    });
  }
}
