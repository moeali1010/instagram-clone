import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from '../reusable-component/posts/posts.component';
import { PostCommentComponent } from '../reusable-component/post-comment/post-comment.component';
import { GetRandomUsersService } from 'src/app/services/get-random-users.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileHeaderComponent } from '../reusable-component/profile-header/profile-header.component';
import { SharedRoutingModule } from './shared-routing.module';
import { UserInfoComponent } from '../reusable-component/user-info/user-info.component';
@NgModule({
  declarations: [
    PostsComponent,
    PostCommentComponent,
    ProfileHeaderComponent,
    UserInfoComponent
  ],
  providers: [GetRandomUsersService],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    SharedRoutingModule
  ],
  exports: [
    IonicModule,
    FormsModule,
    PostsComponent,
    PostCommentComponent,
    ProfileHeaderComponent,
    UserInfoComponent

  ]
})
export class SharedModule { }
