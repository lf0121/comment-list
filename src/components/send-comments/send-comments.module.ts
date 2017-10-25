import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SendCommentsComponent } from './send-comments';

// 星级组件
import { StarRatingModule } from '../star-rating/star-rating.module'

@NgModule({
  declarations: [
    SendCommentsComponent,
  ],
  imports: [
    IonicModule,
    StarRatingModule,
  ],
  exports: [
    SendCommentsComponent
  ]
})
export class SendCommentsModule {}