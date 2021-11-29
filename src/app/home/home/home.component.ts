import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  slideOpts = {
    initialSlide: 0,
    slidesPerView:4,
    speed: 400,
    pagination :false
  };

  constructor() { }

  ngOnInit() {}

}
