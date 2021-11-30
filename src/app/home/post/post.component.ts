import { Component, OnInit , Input } from '@angular/core';
import { Users } from 'src/app/model/users';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() users: Users;
  constructor() { }

  ngOnInit() {
    //console.log("users post" , this.users);
  }

}
