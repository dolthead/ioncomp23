import { Component } from '@angular/core';
import { Badge } from '@awesome-cordova-plugins/badge/ngx';
import { TextToSpeechAdvanced } from '@awesome-cordova-plugins/text-to-speech-advanced/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  badgeCount = 3;
  textToSpeak = 'Hello World';

  constructor(private badge: Badge, private tts: TextToSpeechAdvanced) {}

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

  sayTheThing() {
    this.tts.speak(this.textToSpeak);
  }

}
