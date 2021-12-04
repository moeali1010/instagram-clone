import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  idName: string;
  idValue: string;
  postDetailId: string;
  profileData: any;
  postId: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private profileService: ProfileService

  ) { }

  ngOnInit() {
    this.idName = this.activatedRoute.snapshot.paramMap.get('id');
    this.idValue = this.activatedRoute.snapshot.paramMap.get('value');
    this.postDetailId = this.activatedRoute.snapshot.paramMap.get('postDetailId');
    this.getProfile(this.idName, this.idValue);

  }

  getProfile(idName: string, idValue: string) {
    this.profileService.getProfileData(idName, idValue)
      .subscribe(
        (data) => {
          this.profileData = data;
          this.profileData.like = false;
          this.profileData.comments = [];
          this.profileData.description = `Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s.` ;
          //console.log('data', data);
        },
        (err) => {
          // console.log('error is', err);
        },
        () => {
          //console.log('complete');
        }
      );
  }


  getPost() {

  }


}
