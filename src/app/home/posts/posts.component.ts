import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { UsersPosts } from 'src/app/model/usersposts';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-post',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @Input() users: UsersPosts[];
  @Output() loadMore = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    console.log('users post' , this.users);
  }


  loadData(event) {
    setTimeout(() => {
      event.target.complete();
      this.loadMore.emit('loadMore');
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
  likePost(item) {
    item.like = !item.like  ;
  }
}
