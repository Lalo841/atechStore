import { Component, OnInit } from '@angular/core';
import { FilterTextService } from '../../communication-services/filter-text.service';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrl: './filter-panel.component.scss',
})
export class FilterPanelComponent {
  constructor(private filterTextService: FilterTextService) {}
  activeBtnIndex: number | null = 0; 

  //потом будет приходить с сервера
  filterItems: Array<string> = [
    'Все',
    'Видеокарты',
    'Процессоры',
    'Корпуса',
    'Охлаждение',
  ];

  onClickHandler(item: string, index: number) {
    this.filterTextService.updateText(item);
    this.activeBtnIndex = index;
  }
}
