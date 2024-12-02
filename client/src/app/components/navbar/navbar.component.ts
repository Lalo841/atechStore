// import { Component, OnInit } from '@angular/core';
// // import { MatDialog } from '@angular/material/dialog';
// // import { ModalWindowSignInComponent } from '../modal-window-sign-in/modal-window-sign-in.component';
// import { ModalService } from '../../services/modal-service/modal.service';
// import { CartService } from '../../services/cart-service/cart.service';
// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrl: './navbar.component.scss',
// })
// export class NavbarComponent implements OnInit {
//   public cartCounter: number = 0;
//   constructor(
//     private modalService: ModalService,
//     private cartService: CartService
//   ) {}

//   ngOnInit(): void {
//     this.cartService.getCount.subscribe((count) => (this.cartCounter = count));
//   }

//   openSignInModal(): void {
//     this.modalService.openSignInModal();
//   }
// }



import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ProductPageComponent } from '../../pages/product-page/product-page.component'; // Путь к вашему компоненту
import { ModalService } from '../../services/modal-service/modal.service'; // Импортируем сервисы
import { CartService } from '../../services/cart-service/cart.service'; // Импортируем сервис для работы с корзиной

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  public cartCounter: number = 0; // Добавляем cartCounter для отображения в шаблоне
  @ViewChild(ProductPageComponent) productPageComponent!: ProductPageComponent; // Используем ViewChild для доступа к дочернему компоненту

  constructor(
    private modalService: ModalService, // Сервис для открытия модального окна
    private cartService: CartService    // Сервис для работы с корзиной
  ) {}

  ngOnInit(): void {
    // Инициализация cartCounter с использованием CartService
    this.cartService.getCount.subscribe((count) => (this.cartCounter = count));
  }

  ngAfterViewInit(): void {
    // Здесь мы можем обращаться к productPageComponent
    console.log(this.productPageComponent); // Проверяем, что компонент инициализирован
  }

  openSignInModal(): void {
    this.modalService.openSignInModal(); // Открытие модального окна
  }

  onSearchTextChanged(searchText: string): void {
    // Проверяем, существует ли productPageComponent, и передаем в него введенный текст
    if (this.productPageComponent) {
      this.productPageComponent.onSearchTextChanged(searchText);
    }
  }
}