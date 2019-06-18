import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanlysanphamComponent } from './quanlysanpham.component';
import {NgxPaginationModule} from 'ngx-pagination'; //
@NgModule({
  declarations: [QuanlysanphamComponent],
  imports: [
    CommonModule,
    NgxPaginationModule

  ],
  exports:[QuanlysanphamComponent]
})
export class QuanlysanphamModule { }
