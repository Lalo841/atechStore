import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card-catalog',
  templateUrl: './product-card-catalog.component.html',
  styleUrl: './product-card-catalog.component.scss',
})
export class ProductCardCatalogComponent {
  @Input() product!: any;
}
