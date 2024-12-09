


// import { Component, Input, OnInit } from '@angular/core';
// import { Product } from '../../interfaces/product.interface';
// import { CartService } from '../../services/cart-service/cart.service';

// @Component({
//   selector: 'app-cart-product',
//   templateUrl: './cart-product.component.html',
//   styleUrls: ['./cart-product.component.scss'],
// })
// export class CartProductComponent implements OnInit {
//   @Input() product?: Product;
//   public counter: number = 1;

//   constructor(private cartService: CartService) {}

//   ngOnInit(): void {
//     // Инициализируем количество товара на основе данных из корзины
//     if (this.product) {
//       this.cartService.getCart.subscribe((cart) => {
//         this.counter = cart.get(this.product!) || 1;
//       });
//     }
//   }

//   // Увеличиваем количество товара
//   incrementProductCount(): void {
//     if (this.product) {
//       this.cartService.addToCart(this.product);
//       this.counter++;
//     }
//   }

//   // Уменьшаем количество товара
//   decrementProductCount(): void {
//     if (this.product) {
//       this.cartService.decrementCountProduct(this.product);
//       this.counter--;
//     }
//   }

//   // Удаляем товар из корзины
//   removeItem(): void {
//     if (this.product) {
//       this.cartService.deleteFromCart(this.product);
//     }
//   }
// }


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



// import { Component, Input, OnInit } from '@angular/core';
// import { Product } from '../../interfaces/product.interface';
// import { CartService } from '../../services/cart-service/cart.service';

// @Component({
//   selector: 'app-product-card',  // Компонент карточки товара
//   templateUrl: './product-card.component.html',
//   styleUrls: ['./product-card.component.scss'],
// })
// export class ProductCardComponent implements OnInit {
//   @Input() product?: Product;  // Вводимый товар (передается в компонент)
//   public counter: number = 0;  // Количество товара в корзине
//   public isInCart: boolean = false;  // Флаг, который указывает, добавлен ли товар в корзину

//   constructor(private cartService: CartService) {}

//   ngOnInit(): void {
//     // Подписываемся на изменения корзины
//     if (this.product) {
//       this.cartService.getCart.subscribe((cart) => {
//         this.counter = cart.get(this.product!) || 0;  // Получаем актуальное количество товара
//         this.isInCart = this.counter > 0;  // Если товар в корзине, показываем кнопки + и -
//       });
//     }
//   }

//   // Метод для добавления товара в корзину
//   addBtnHandler(): void {
//     if (this.product) {
//       this.cartService.addToCart(this.product);  // Добавляем товар в корзину
//       this.isInCart = true;  // Показываем кнопки управления количеством
//       this.counter = 1;  // Количество товара становится 1
//     }
//   }

//   // Метод для увеличения количества товара в корзине
//   incrementProductCount(): void {
//     if (this.product) {
//       this.cartService.addToCart(this.product);  // Увеличиваем количество товара в корзине
//       this.counter++;  // Увеличиваем локальное количество
//     }
//   }

//   // Метод для уменьшения количества товара в корзине
//   decrementProductCount(): void {
//     if (this.product && this.counter > 1) {
//       this.cartService.decrementCountProduct(this.product);  // Уменьшаем количество товара
//       this.counter--;  // Уменьшаем локальное количество
//     } else if (this.product && this.counter === 1) {
//       this.cartService.deleteFromCart(this.product);  // Удаляем товар из корзины, если количество 1
//       this.isInCart = false;  // Скрываем кнопки управления количеством
//     }
//   }
// }