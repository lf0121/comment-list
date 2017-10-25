import { NgModule } from '@angular/core';
import { IonicModule,IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

// 评论列表组件
import { CommentListModule } from '../../components/comment-list/comment-list.module';
// 发布评论组件
import { SendCommentsModule } from '../../components/send-comments/send-comments.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicModule,
    IonicPageModule.forChild(HomePage),
    CommentListModule,
    SendCommentsModule,
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}