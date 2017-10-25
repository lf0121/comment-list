import { Component } from '@angular/core';

/**
 * Generated class for the CommentListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'comment-list',
  templateUrl: 'comment-list.html'
})
export class CommentListComponent {

  text: string;

  constructor() {
    console.log('Hello CommentListComponent Component');
    this.text = '组件';
  }

}
