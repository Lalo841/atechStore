import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../components/product.model'; // Импортируем интерфейс

@Component({
  selector: 'app-module-window-card',
  templateUrl: './module-window-card.component.html',
  styleUrls: ['./module-window-card.component.scss'],
})
export class ModuleWindowCardComponent {
  @Input() product!: Product | null;
  @Output() modalClose = new EventEmitter<void>();  // Создаем EventEmitter для уведомления родительского компонента

  closeModal() {
    this.modalClose.emit();  // Генерируем событие для родителя
  }

  
}