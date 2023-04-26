import { Component } from '@angular/core';
import { Badge } from '@awesome-cordova-plugins/badge/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  badgeCount = 3;

  constructor(private badge: Badge) {}

  updateBadgeCount() {
    // emit badge count event
    
    const evt = new CustomEvent('badgeCount', { detail: this.badgeCount });
    window.dispatchEvent(evt);

    if (this.badgeCount === 0) {
      this.badge.clear();
    } else {
      this.badge.set(this.badgeCount);
    }
  }

}
