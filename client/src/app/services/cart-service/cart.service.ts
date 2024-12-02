import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Map<Product, number> = new Map([
    [
      {
        name: 'Корпус Cougar Duoface Pro',
        price: 11990,
        rating: 4.5,
        warranty: 24,
        manufacturer: 'Cougar',
        img: 'img-devices/image2.png',
        description:
          'Среднеразмерный корпус Cougar Duoface Pro RGB с поддержкой ARGB-подсветки, обеспечивающий отличную вентиляцию и стильный внешний вид.',
        category:'Процессор'
      },
      3,
    ],
  ]);
  private cartCount: number = this.cart.size;

  private cartCountSubject = new BehaviorSubject<number>(this.cartCount);
  private cartSubject = new BehaviorSubject<Map<Product, number>>(this.cart);

  get getCart() {
    return this.cartSubject.asObservable();
    // let tempCart: Product[] = [];
    // for (const key of this.cart.keys()) {
    //   tempCart.push(key);
    // }
    // return tempCart;
  }

  get getCount() {
    return this.cartCountSubject.asObservable();
  }

  addToCart(value: Product) {
    if (this.cart.has(value)) {
      let countProduct = this.cart.get(value);
      this.cart.set(value, countProduct! + 1);
    } else {
      this.cart.set(value, 1);
      this.cartCount++;
    }
    this.cartSubject.next(new Map(this.cart));
    this.cartCountSubject.next(this.cartCount);
  }

  decrementCountProduct(value: Product) {
    if (this.cart.get(value)! > 1) {
      let countProduct = this.cart.get(value);
      this.cart.set(value, countProduct! - 1);
    } else if (this.cart.get(value) === 1) {
      this.deleteFromCart(value);
      this.cartCount--;
    }

    this.cartSubject.next(new Map(this.cart));
    this.cartCountSubject.next(this.cartCount);
  }

  deleteFromCart(value: Product) {
    this.cart.delete(value);
    this.cartCount--;
    this.cartSubject.next(new Map(this.cart));
    this.cartCountSubject.next(this.cartCount);
  }
}
