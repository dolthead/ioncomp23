import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  badgeCount = 3;

  constructor() {}

  updateBadgeCount() {
    // emit badge count event
    
    const evt = new CustomEvent('badgeCount', { detail: this.badgeCount });
    window.dispatchEvent(evt);
  }

}
