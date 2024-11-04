import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrl: './filter-item.component.scss',
})
export class FilterItemComponent {
  @Input() btnText!: string;
  
}
