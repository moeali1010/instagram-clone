import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { GetRandomUsersService } from 'src/app/services/get-random-users.service';
import { StoriesComponent } from './stories/stories.component';
import { PostComponent } from './post/post.component';
@NgModule({
  declarations: [HomeComponent, StoriesComponent , PostComponent],
  imports: [
    CommonModule,
    HomeRoutingModule ,
    CommonModule,
    SharedModule
  ],providers:[
    GetRandomUsersService
  ]
})
export class HomeModule { }
