import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-some-products',
  templateUrl: './some-products.component.html',
  styleUrls: ['./some-products.component.scss']
})
export class SomeProductsComponent implements OnInit {
  products:any[]=[
    {
      img:"../../../../../assets/top_products_one.jpeg",
      name:"Laxmi-Narayana",
    },
    {
      img:"../../../../../assets/Hand.jpeg",
      name:"Handicraft",
    },
    {
      img:"../../../../../assets/top_products_three.jpeg",
      name:"Radha-Krishna",
    },
    {
      img:"../../../../../assets/statue.jpg",
      name:"Human Statue",
    },
    

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
