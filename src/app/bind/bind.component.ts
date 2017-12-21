import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  imgUrl : string = 'http://via.placeholder.com/400x220';

  size : number = 2;

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
    setInterval(() => {
      this.name = "Tom";
    },3000)
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

}
