import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ItemComponent } from "./item/item.component";
import { LaptopListComponent } from "./laptop/components/laptop-list/laptop-list.component";
import { SmartphoneListComponent } from "./smartphone/components/smartphone-list/smartphone-list.component";

@NgModule({
  declarations: [
    ItemComponent,

    LaptopListComponent,
    SmartphoneListComponent
  ],
  imports: [CommonModule],
  exports: [
    ItemComponent,
    LaptopListComponent,
    SmartphoneListComponent
  ]
})
export class ItemsProductModule {}
