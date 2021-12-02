import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  @Input() profileData: any;
  constructor() { }

  ngOnInit() {
//    console.log('profileData' , this.profileData);
  }

}
