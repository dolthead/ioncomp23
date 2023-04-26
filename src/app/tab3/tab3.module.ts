import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';

import {HttpClientModule} from '@angular/common/http';
import { Tab3PageRoutingModule } from './tab3-routing.module';
import { DetailPage } from './detail/detail.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab3PageRoutingModule,
    HttpClientModule,
  ],
  declarations: [Tab3Page, DetailPage],
  providers: [ TitleCasePipe],
})
export class Tab3PageModule {}
