import { Component, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-quanlysanpham',
  templateUrl: './quanlysanpham.component.html',
  styleUrls: ['./quanlysanpham.component.scss']
})
export class QuanlysanphamComponent implements OnInit {
  listProduct: any[] = [];
  public config: PaginationInstance = {
    id: 'dssp',
    itemsPerPage: 10,
    currentPage: 1
};

  constructor() {}

  ngOnInit() {
    this.getLocalStorage();
  }
  getLocalStorage() {
    if ( localStorage.getItem('products') !== null) {
       this.listProduct = JSON.parse(localStorage.getItem('products')) ;
    }
  }
// tslint:disable-next-line: variable-name
  addProduct(_masp: any, _name: any, _price: any) {
    const item = {
      masp: _masp,
      name: _name,
      price: _price
    };
    this.listProduct.unshift(item);
    localStorage.setItem('products', JSON.stringify(this.listProduct));
  }
  deleteProduct(_masp: any) {
    const index = this.listProduct.findIndex(item => item.masp === _masp);
    this.listProduct.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(this.listProduct));
  }

  // phan trang
      onPageChange(number: number) {
        this.config.currentPage = number;
    }
}
