import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart-service/cart.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  public cartItems: Map<Product, number> = new Map();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Подписываемся на обновления корзины
    this.cartService.getCart.subscribe((cart) => {
      this.cartItems = cart;
      console.log(this.cartItems); // Для отладки
    });
  }

  // Метод для очистки корзины
  clearCart(): void {
    this.cartService.clearCart();
  }

  // Метод для вычисления общей суммы корзины
  totalAmount(): number {
    let total = 0;
    this.cartItems.forEach((quantity, product) => {
      total += product.price * quantity;
    });
    return total;
  }

  // Переход к оплате (пока заглушка)
  proceedToPayment(): void {
    console.log('Переход к оплате...');
    // Здесь можно реализовать редирект на страницу оплаты или показать модальное окно
  }
}











