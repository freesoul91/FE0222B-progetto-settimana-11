import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/products.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public countproducts: number = 0;
  router: any;

  constructor(private cartservice: CartService) {}

  ngOnInit(): void {
    this.cartservice.getProducts().subscribe((res) => {
      this.countproducts = res.length;
    });

  }

}


