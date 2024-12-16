import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { CartService } from '../../services/cart-service/cart.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss'],
})
export class CartProductComponent implements OnInit {
  @Input() product?: Product;
  public counter: number = 1;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Инициализируем количество товара на основе данных из корзины
    if (this.product) {
      this.cartService.getCart.subscribe((cart) => {
        this.counter = cart.get(this.product!) || 1; // Получаем актуальное количество товара из корзины
      });
    }
  }

  // Увеличиваем количество товара
  incrementProductCount(): void {
    if (this.product) {
      this.cartService.addToCart(this.product); // Добавляем товар в корзину
    }
  }

  // Уменьшаем количество товара
  decrementProductCount(): void {
    if (this.product) {
      this.cartService.decrementCountProduct(this.product); // Уменьшаем количество товара в корзине
    }
  }

  // Удаляем товар из корзины
  removeItem(): void {
    if (this.product) {
      this.cartService.deleteFromCart(this.product);
    }
  }
}
