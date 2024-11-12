

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort-panel',
  templateUrl: './sort-panel.component.html',
  styleUrls: ['./sort-panel.component.scss']
})
export class SortPanelComponent {
  @Output() sortChanged: EventEmitter<string | undefined> = new EventEmitter(); // Используем string | undefined

  // Изменяем тип на string, чтобы поддерживать значения сортировки по цене, производителю и гарантии
  selectedSortOrder: string | undefined = undefined; // Теперь это строка или undefined

  // Метод, который вызывается при изменении сортировки
  onSortChange(sortOrder: string | undefined) {
    this.selectedSortOrder = sortOrder;
    this.sortChanged.emit(sortOrder); // Отправляем выбранную сортировку
  }

  // Метод для сброса сортировки
  onResetSort() {
    this.selectedSortOrder = undefined;
    this.sortChanged.emit(undefined); // Отправляем undefined для сброса сортировки
  }
}
