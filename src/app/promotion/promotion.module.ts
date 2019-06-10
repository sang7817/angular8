import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PomoComponent } from './components/pomo/pomo.component';

@NgModule({
  declarations: [PomoComponent],
  imports: [
    CommonModule
  ],
  exports:[PomoComponent]
})
export class PromotionModule { }
