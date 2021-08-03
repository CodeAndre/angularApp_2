import { Component, OnInit } from '@angular/core';

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
}
