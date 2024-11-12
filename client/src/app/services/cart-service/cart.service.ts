import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //пока без rxj

  private cart: Product[] = [];

  get getCart(): Product[] {
    return this.cart;
  }

  addToCart(value: Product){
    this.cart.push(value);
  }

  deleteFromCart(value: Product){
    this.cart.splice(this.cart.indexOf(value), 1);
  }

  constructor() {}
}
