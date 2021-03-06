import { Component, OnInit, ViewChild } from '@angular/core';
import { GetRandomUsersService } from 'src/app/services/get-random-users.service';
import { UsersPosts } from 'src/app/model/usersposts';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  usersPosts: Array<UsersPosts> = [];
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
            element.like = false;
            element.comments = [];
            element.description = `Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s.` ;
            this.usersPosts.push(element);
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


  loadData(event) {
    setTimeout(() => {
      event.target.complete();
      this.loadMore();
    }, 500);
  }



}
