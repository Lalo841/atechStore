import { Component, OnInit } from '@angular/core';
import { FilterTextService } from '../../communication-services/filter-text.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent implements OnInit{
  selectedText: string = 'Все'

  constructor(private filterTextService: FilterTextService){}
ngOnInit(): void {
  this.filterTextService.currentText$.subscribe(text =>{
    this.selectedText = text;
  })
}
  
}
