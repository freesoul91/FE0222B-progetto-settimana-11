import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Products } from '../models/interface';
import { CartService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl:'./products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {



  productList!: Products[];
  constructor(private api:ProductsService,private cartservice :CartService){}



  ngOnInit(): void {
    this.api.getProduct().subscribe((res): void=>{

      this.productList=res;
    })
  }
}






