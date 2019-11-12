import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product=[
    {
      title : "I-Phone",
      price : 2500,
      detail : "sdrg sdfbsdfb sdfg sdfg sdfg "
    },
    {
      title : "Sony",
      price : 3200,
      detail : "sdfg sdfg sdfg sdgergsdfg serg"
    },
    {
      title : "HTC",
      price : 1800,
      detail : "sdg sdfg"
    }
  ];



  constructor() { }

  ngOnInit() {
  }

}
