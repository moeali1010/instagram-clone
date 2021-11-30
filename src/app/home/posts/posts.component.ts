import { Component, OnInit, Input, ViewChild , Output ,EventEmitter } from '@angular/core';
import { Users } from 'src/app/model/users';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-post',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @Input() users: Users[];
  @Output() loadMore = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    //console.log("users post" , this.users);
  }


  loadData(event) {
    setTimeout(() => {
      //console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      this.loadMore.emit('loadMore');
      // and disable the infinite scroll
      if (this.users.length === 30) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
