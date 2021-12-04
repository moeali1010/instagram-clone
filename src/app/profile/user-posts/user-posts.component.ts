import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss'],
})
export class UserPostsComponent implements OnInit {
  @Input() profileData: any;
  userPosts: any = [];
  constructor() { }

  ngOnInit() {
    for (let index = 0; index < 30; index++) {
      this.userPosts.push(index);
    }
  }

}
