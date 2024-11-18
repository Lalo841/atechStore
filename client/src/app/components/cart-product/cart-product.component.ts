import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { CartService } from '../../services/cart-service/cart.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrl: './cart-product.component.scss',
})
export class CartProductComponent implements OnInit {
  @Input() product?: Product;

  constructor(private cartService: CartService) {}

  public counter: number = 1;

  ngOnInit(): void {
    console.log(this.product);
  }

  incrementProductCount() {
    this.cartService.addToCart(this.product!);
    this.counter++;
  }

  decrementProductCount() {
    this.cartService.decrementCountProduct(this.product!);
    if (this.counter === 1) {
      this.cartService.deleteFromCart(this.product!);
    } else {
      this.counter--;
    }
  }
}
