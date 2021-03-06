import { Component, OnInit } from '@angular/core';
import {Observer, Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import 'rxjs/Rx';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  birthday : Date  = new Date();

  pi : number = 3.1415926;

  size : number = 7;

  searchInput : FormControl = new FormControl();

  imgUrl : string = 'http://via.placeholder.com/400x220';

  name : string;

  divClass : any  = {
    a : false,
    b : false,
    c : false
  }

  isBig : boolean = false;

  isDev : boolean = false;

  divStyle : any = {
    color : 'red',
    background : 'yellow'
  }

  constructor() {
    // setInterval(() => {
    //   this.name = "Tom";
    // },3000)
    // Observable.from([1,2,3,4])
    //   .filter(e => e % 2 == 0)
    //   .map(e => e * e)
    //   .subscribe(
    //     e => console.log(e),
    //     err => console.error(err),
    //     () => console.log("结束啦")
    //   )
    // this.searchInput.valueChanges
    //   .debounceTime(500)
    //   .subscribe(stockCode => this.getStockCode(stockCode));
  }

  ngOnInit() {
  }

  doOnClick(event : any) {
    alert(event);
  }

  doOnInput(event : any) {
    // 打出的属性是dom属性
    // console.log(event.target.value);
    //打出的属性是html属性，是不会变化的
    // console.log(event.target.getAttribute('value'));
    this.name = event.target.value;
  }

  getStockCode(value : string) {
    console.log(value);
  }

}
