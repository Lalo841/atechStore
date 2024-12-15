import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../components/product.model'; // Импортируем интерфейс
import { CartService } from '../../services/cart-service/cart.service';
@Component({
  selector: 'app-module-window-card',
  templateUrl: './module-window-card.component.html',
  styleUrls: ['./module-window-card.component.scss'],
})
export class ModuleWindowCardComponent {
  @Input() product!: any;
  @Output() modalClose = new EventEmitter<void>();  // Создаем EventEmitter для уведомления родительского компонента

  constructor(private cartService: CartService){}

  closeModal() {
    this.modalClose.emit();  // Генерируем событие для родителя
  }

  onBackgroundClick(event: MouseEvent): void {
    // Проверяем, что клик произошел вне карточки
    const target = event.target as HTMLElement;
    const isOutside = !target.closest('.modal-content'); // Проверяем, является ли цель клика дочерним элементом .modal-content
    if (isOutside) {
      this.closeModal();
    }
  }
  addBtnHandler(){
    this.cartService.addToCart(this.product);
  }
}