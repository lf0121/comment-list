import { Component,OnInit } from '@angular/core';

/**
 * Generated class for the SendCommentsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'send-comments',
  templateUrl: 'send-comments.html'
})
export class SendCommentsComponent implements OnInit {

  text: string;
  msg:string;
  _content:string = '';
  _num:number;

  constructor() {
    this.msg = '加油';
    if( typeof this._content=='string' ){
      this._num = this._content.length;
    }
  }

  click(e){
    if( e.from=='0' ){
      this.msg = '差评，不能忍'
    }else if( e.from=='1' ){
      this.msg = '差评，不懂我'
    }else if( e.from=='2' ){
      this.msg = '中评，加把劲'
    }else if( e.from=='3' ){
      this.msg = '好评，棒棒哒'
    }else if( e.from=='4' ){
      this.msg = '好评，非常赞'
    }
  }

  ngOnInit(){

  }

  pickUp(e){
    // console.log( e )
    // console.log( this._content )
    if( typeof this._content=='string' ){
      this._num = this._content.length;
    }
    
  }

}
