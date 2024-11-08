import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-product-card-catalog',
  templateUrl: './list-product-card-catalog.component.html',
  styleUrl: './list-product-card-catalog.component.scss'
})
export class ListProductCardCatalogComponent {
  @Input() products!: any; 
}
