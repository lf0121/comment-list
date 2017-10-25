import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommentListComponent } from './comment-list';

@NgModule({
  declarations: [
    CommentListComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    CommentListComponent
  ]
})
export class CommentListModule {}