import { Component } from '@angular/core';
import { FilterTextService } from '../../communication-services/filter-text.service';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss'],
})
export class FilterPanelComponent {
  constructor(private filterTextService: FilterTextService) {}
  activeBtnIndex: number | null = 0;

  filterItems: Array<string> = [
    'Все',
    'Видеокарты',
    'Процессоры',
    'Корпуса',
    'Охлаждение',
    'Материнские платы',
    'ОЗУ',
    'Блоки питания',
    'Накопители'
  ];

  onClickHandler(item: string, index: number) {
    this.filterTextService.updateText(item);  // Обновляем выбранный фильтр
    this.activeBtnIndex = index;
  }
}