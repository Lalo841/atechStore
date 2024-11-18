import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart-service/cart.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss',
})
export class CartPageComponent implements OnInit {
  public cartItems: Map<Product, number> = new Map();
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCart.subscribe((cart) => {
      this.cartItems = cart;
      console.log(this.cartItems);
    });
  }
}
