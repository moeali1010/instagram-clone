import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
@NgModule({
  declarations: [ProfileComponent , UserInfoComponent , UserPostsComponent , PostDetailComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
