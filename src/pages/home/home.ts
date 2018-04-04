import { Component } from '@angular/core';
import {  NavController, ViewController } from 'ionic-angular';

import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {VisitorPage } from '../visitor/visitor';
import {EmployeePage} from '../employee/employee';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  attendance : FormGroup;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, public viewCtrl: ViewController) {
  
      this.attendance = this.formBuilder.group({
        guests: ['', Validators.required],
      });
      
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  } 

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
      console.log(this.attendance.value);

      if(this.attendance.get('guests').value==2){
      this.navCtrl.push(VisitorPage);}
      else if(this.attendance.value.guests==1)
      {this.navCtrl.push(EmployeePage);}
     }


}
    
