import { BackgroundRoutingModule } from './background-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundComponent } from './background.component';

@NgModule({
  imports: [
    CommonModule,
    BackgroundRoutingModule
  ],
  declarations: [BackgroundComponent],
  exports: [BackgroundComponent]
})
export class BackgroundModule { }
