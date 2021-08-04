import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'webApp';

  constructor() { }

  ngOnInit(){

  }

  url: string = "../assets/img_1.jpg"
  url_1: string = "../assets/img_2.jpg"
  url_2: string = "../assets/img_3.jpg"
  url_3: string = "../assets/img_4.jpg"

  changeImage(event: any){
    this.url = event.target.src;
  }

  changeImage1(event: any){
    this.url_1 = event.target.src;
  }
  changeImage2(event: any){
    this.url_2 = event.target.src;
  }
  changeImg(event: any){
    this.url_3 = event.target.src;
  }

  partnersArray: any = [
    {
      imgName: "../assets/parterns/p1.png"
    },
    {
      imgName: "../assets/parterns/p2.png"
    },
    {
      imgName: "../assets/parterns/p3.png"
    },
    {
      imgName: "../assets/parterns/p4.png"
    },
    {
      imgName: "../assets/parterns/p7.png"
    },
    {
      imgName: "../assets/parterns/p6.png"
    },
  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: false
  }

  customPolicy: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fas fa-caret-left"></i>', '<i class="fas fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

}
