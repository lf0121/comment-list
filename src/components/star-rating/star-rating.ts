import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';

/**
 * Generated class for the StarRatingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'star-rating',
  templateUrl: 'star-rating.html'
})
export class StarRatingComponent implements OnInit {
  _small:boolean = false;
  _rank:string = '0';
  show:boolean = false;

  array_1 = [0,1,2,3,4];
  array_2 = [0];
  starArray:any = [];

  // 子组件接收父组件内容
  @Input() rank:string;
  @Input() small:boolean;
  
  // 传入父组件
  @Output() send = new EventEmitter();

  constructor() {
    this.starArray = this.array_1;
  }

  ngOnInit(){
    this._small = this.small != undefined;
    if( typeof this._rank=='string' ){
      this._rank = this.rank;
    };
    if( this._small ){
      // 缩略形式
      this.show = true;
      this.starArray = this.array_2;
    }else{
      // 完整形式
      this.show = false;
      this.starArray = this.array_1;      
    }
    
  }

  // 事件
  starNum(i){
    console.log(i);
    this._rank = i+1;
    this.send.emit(
        {
          from:i
        }
    )
  }

}
