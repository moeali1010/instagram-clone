import { Component, OnInit } from '@angular/core';
import { GetRandomUsersService } from 'src/app/services/get-random-users.service';
import { Users } from 'src/app/model/users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  users: Array<Users> = [];
  pageNumer = 1;
  limit = 8;
  seed = '';
  constructor(private getRandomUsersService: GetRandomUsersService) { }

  ngOnInit() {
    this.getRandomUsers(this.pageNumer, this.limit, this.seed);
  }

  getRandomUsers(pageNumer, limit, seed) {

    this.getRandomUsersService.randomUsers(pageNumer, limit, seed)
      .subscribe(
        (data) => {

          data.forEach(element => {
            element.like = false ;
            element.comments = [] ;
            this.users.push(element);
          });
        },
        (err) => {
          // console.log('error is', err);
        },
        () => {
          //console.log('complete');
        }
      );

  }

  loadMore() {
    this.pageNumer++;
    this.getRandomUsers(this.pageNumer, this.limit, this.seed);
  }

}
