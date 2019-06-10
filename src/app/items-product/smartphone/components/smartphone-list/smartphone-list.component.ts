import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smartphone-list',
  templateUrl: './smartphone-list.component.html',
  styleUrls: ['./smartphone-list.component.scss']
})
export class SmartphoneListComponent implements OnInit {

  itemproduct: any[]=[];

  constructor() { }

  ngOnInit() {
    this.itemproduct =[
      {
        id: 1,
        name: 'Iphone X',
        image: '../../../assets/img/sp_iphoneX.png',
        description: 'iPhone X features a new all-screen design. Face ID, which makes your face your password'
      },
      {
        id: 2,
        name: 'Galaxy Note 7',
        image: '../../../assets/img/sp_note7.png',

        description: 'The Galaxy Note7 comes with a perfectly symmetrical design for good reason'
      },
      {
        id: 3,
        name: 'Vivo',
        image: '../../../assets/img/sp_vivo850.png',

        description: 'A young global smartphone brand focusing on introducing perfect sound quality'
      },
      {
        id: 4,
        name: 'Blackberry',
        image: '../../../assets/img/sp_blackberry.png',

        description: 'BlackBerry is a line of smartphones, tablets, and services originally designed'
      },
    ]
  }

}
