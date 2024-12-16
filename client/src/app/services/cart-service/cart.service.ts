import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Map<Product, number> = new Map();
  private cartCount: number = 0;
  private cartSubject = new BehaviorSubject<Map<Product, number>>(this.cart);
  private cartCountSubject = new BehaviorSubject<number>(this.cartCount);

  get getCart(): Observable<Map<Product, number>> {
    return this.cartSubject.asObservable();
  }

  get getCount(): Observable<number> {
    return this.cartCountSubject.asObservable();
  }

  // Добавить товар в корзину
  addToCart(value: Product): void {
    if (this.cart.has(value)) {
      let count = this.cart.get(value)!;
      this.cart.set(value, count + 1); // Увеличиваем количество на 1
    } else {
      this.cart.set(value, 1);
    }
    this.updateCart();
  }

  // Уменьшить количество товара
  decrementCountProduct(value: Product): void {
    if (this.cart.get(value)! > 1) {
      let count = this.cart.get(value)!;
      this.cart.set(value, count - 1);
    } else {
      this.deleteFromCart(value);
    }
    this.updateCart();
  }

  // Удалить товар из корзины
  deleteFromCart(value: Product): void {
    this.cart.delete(value);
    this.updateCart();
  }

  // Очистить корзину
  clearCart(): void {
    this.cart.clear();
    this.updateCart();
  }

  // Метод для обновления корзины и уведомления подписчиков
  private updateCart(): void {
    this.cartCount = this.cart.size;
    this.cartSubject.next(new Map(this.cart));
    this.cartCountSubject.next(this.cartCount);
  }
}

