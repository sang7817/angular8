import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.scss']
})
export class LaptopListComponent implements OnInit {

  itemproduct: any[]=[]

  constructor() { }

  ngOnInit() {
    this.itemproduct = [
      {
        id: 1,
        name: 'MACBOOK',
        image: '../../../assets/img/lt_macbook.png',
        description: 'The MacBook is a brand of notebook computers manufactured by Apple Inc'
      },
      {
        id: 2,
        name: 'ASUS ROG',
        image: '../../../assets/img/lt_rog.png',
        description: "The Asus ROG Strix Flare is the latest addition to Asus' lineup of ROG branded devices"
      },
      {
        id: 3,
        name: 'HP OMEN',
        image: '../../../assets/img/lt_hp.png',

        description: 'A young global smartphone brand focusing on introducing perfect sound quality'
      },
      {
        id: 4,
        name: 'LENOVO THINKPAD',
        image: '../../../assets/img/lt_lenovo.png',

        description: 'The ThinkPad X1 Carbon is a high-end notebook computer released by Lenovo in 2012'
      },
    ]
  }

}
