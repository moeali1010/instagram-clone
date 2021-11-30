import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { GetRandomUsersService } from 'src/app/services/get-random-users.service';
import { StoriesComponent } from './stories/stories.component';
import { PostsComponent } from './posts/posts.component';
import { PostCommentComponent } from './post-comment/post-comment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [HomeComponent, StoriesComponent , PostsComponent , PostCommentComponent],
  imports: [
    CommonModule,
    HomeRoutingModule ,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],providers:[
    GetRandomUsersService
  ]
})
export class HomeModule { }
