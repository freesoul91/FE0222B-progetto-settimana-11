  import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/products.service';
import { Products } from '../models/interface';


 @Component({

  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  public product : Products[]=[];
  constructor(
        private cartService: CartService  ) {}

        ngOnInit(): void {
          this.cartService.getProducts().subscribe(res=>{
            this.product = res;
          })
        }

      }




