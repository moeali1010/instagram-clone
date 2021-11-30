import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { UsersPosts } from 'src/app/model/usersposts';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {

  @Input() users: UsersPosts[];
  // Slider Option
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 4,
    speed: 400,
    pagination: false
  };

  constructor() { }

  ngOnInit() {
    //console.log('users stories', this.users);
  }


}
