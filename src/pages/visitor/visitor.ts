import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the VisitorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visitor',
  templateUrl: 'visitor.html',
})
export class VisitorPage {

  visitorForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,  
    private formBuilder: FormBuilder, private emailComposer: EmailComposer)
  {
      this.visitorForm = this.formBuilder.group({
        firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
        lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
        mobilenum: ['', [Validators.required, Validators.pattern, Validators.minLength(10)] ],
        email: ['', [Validators.required, Validators.email] ],
      });

      
  }



  sendEmail() {

    console.log(this.visitorForm.value);


    let email = {
      to: 'somilbansal4u@yahoo.com',
      subject: '[Attendance]',
      body: 'Dear Sir/Madam',
      isHtml: true
    };

    // Send a text message using default options
    this.emailComposer.open(email);
  }
    

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisitorPage');
  }

}
