import { NgModule } from '@angular/core';
import { CommentListComponent } from './comment-list/comment-list';
import { SendCommentsComponent } from './send-comments/send-comments';
@NgModule({
	declarations: [CommentListComponent,
    SendCommentsComponent],
	imports: [],
	exports: [CommentListComponent,
    SendCommentsComponent]
})
export class ComponentsModule {}
