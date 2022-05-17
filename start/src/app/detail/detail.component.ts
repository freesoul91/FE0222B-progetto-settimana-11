import { Component, OnInit } from '@angular/core';
import { CartService, ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../models/interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})


export class DetailComponent implements OnInit {
  idproduct!: Products;
  constructor(
    private router: ActivatedRoute,
    private productsrv: ProductsService,
    private cartservice : CartService

  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      const id = +params['id'];
      this.productsrv.getItem(id).subscribe((item) => {
        this.idproduct = item;
      });
    });

  }
   addToCart(product : Products){
    this.cartservice.addToCart(product);
}
}
