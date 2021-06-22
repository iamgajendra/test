import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  productdetail :{};
  productName:string;
  productPrice:number;
  productImage:string
  ngOnInit(): void {
    this.route.queryParams.subscribe( (param:any) => {
       this.productdetail = param;
       this.productName = param.name;
       this.productPrice = param.price;
       this.productImage = param.img;
      // console.log(param);
  });
  }
  

}
