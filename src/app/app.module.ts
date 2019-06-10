import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarouselModule } from './carousel/carousel.module';
import { NavbarModule } from './navbar/navbar.module';
import { PromotionModule } from './promotion/promotion.module';
import { ItemsProductModule } from './items-product/items-product.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    NavbarModule,
    PromotionModule,
    ItemsProductModule

  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
