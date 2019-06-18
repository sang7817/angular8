import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { PromotionModule } from './promotion/promotion.module';
import { ItemsProductModule } from './items-product/items-product.module';
import { CarouselModule } from './bai-tap-1/carousel/carousel.module';
import { QuanlysanphamModule } from './bai-tap-2/quanlysanpham/quanlysanpham.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    NavbarModule,
    PromotionModule,
    ItemsProductModule,
    QuanlysanphamModule

  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
