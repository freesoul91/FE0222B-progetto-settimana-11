import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  prodottiDaStamp!: Product[];

  constructor(private prodSrv: ProductsService) {}

  ngOnInit(): void {
    this.prodSrv.get().subscribe((prodInJson) => {
      this.prodottiDaStamp = prodInJson;
    });
  };
}
