import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from "../models/interface";
import { BehaviorSubject } from 'rxjs';





@Injectable({
  providedIn: 'root'
})


  export class ProductsService {


  constructor(private http: HttpClient) { }
  getProduct(){
    return this.http.get<Products[]>("http://localhost:4201/products");

  }
  getItem(id:number) {
    return this.http.get<Products>('http://localhost:4201/products' + '/'+id);
  }


}




export class CartService {
  public cartProductsList: Products[] = [];
  public productList = new BehaviorSubject<Products[]>([]);

  constructor() {}
  getProducts() {
    return this.productList.asObservable();
  }
addToCart(product : Products){
    this.cartProductsList.push(product);
    this.productList.next(this.cartProductsList);

  }

}
