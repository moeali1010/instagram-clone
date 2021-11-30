import { Component, OnInit, Input } from '@angular/core';
import { Users } from 'src/app/model/users';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {

  @Input() users: Users;
  // Slider Option
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 4,
    speed: 400,
    pagination: false
  };

  constructor() { }

  ngOnInit() {
//console.log("users" , this.users);
  }



}
