import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReelsRoutingModule } from './reels-routing.module';
import { ReelsComponent } from './reels/reels.component';

@NgModule({
  declarations: [ReelsComponent],
  imports: [
    CommonModule,
    ReelsRoutingModule
  ]
})
export class ReelsModule { }
