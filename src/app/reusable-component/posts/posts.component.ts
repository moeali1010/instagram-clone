import { Component, OnInit, Input } from '@angular/core';
import { UsersPosts } from 'src/app/model/usersposts';


@Component({
  selector: 'app-post',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {

  @Input() item: any;
  @Input() index: any;

  constructor() { }

  ngOnInit() {
    console.log('item', this.item);
  }

  likePost(item) {
    item.like = !item.like;
  }
}
