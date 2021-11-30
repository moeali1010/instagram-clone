import { Component, OnInit } from '@angular/core';
import { GetRandomUsersService } from 'src/app/services/get-random-users.service';
import { Users } from 'src/app/model/users';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {

   // Slider Option
   slideOpts = {
    initialSlide: 0,
    slidesPerView: 4 ,
    speed: 400,
    pagination: false
  };
  users: Users;
  constructor(private getRandomUsersService: GetRandomUsersService) { }

  ngOnInit() {
    this.getRandomUsers();
  }

  getRandomUsers() {

    this.getRandomUsersService.randomUsers( 1 , 30 , 'feed')
      .subscribe(

        (result) => {
          this.users =  result ;
          console.log(' this.users',  this.users);
        },
        (err) => {
          console.log('error is', err);
        },
        () => {
          console.log('comsplete');
        }
      );

  }

}
