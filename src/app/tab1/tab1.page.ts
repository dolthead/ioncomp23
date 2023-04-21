import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor() { }

  alertButtons = [
    {
      text: 'OK',
      handler: this.myHandler
    }
  ];

  person = {
    name: 'Todd',
    nickname: '',
    age: '',
    bio: '',
  };

  public alertInputs = [
    {
      placeholder: 'Name',
      value: this.person.name,
    },
    {
      placeholder: 'Nickname (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'number',
      placeholder: 'Age',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'A little about yourself',
    },
  ];

  myHandler(ev: Event) {
    console.log('Alert did dismiss');
  }

}
