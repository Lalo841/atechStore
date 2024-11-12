// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-product-card-catalog',
//   templateUrl: './product-card-catalog.component.html',
//   styleUrl: './product-card-catalog.component.scss',
// })
// export class ProductCardCatalogComponent {
//   @Input() product!: any;
// }

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card-catalog',
  templateUrl: './product-card-catalog.component.html',
  styleUrls: ['./product-card-catalog.component.scss'],
})
export class ProductCardCatalogComponent {
  @Input() product!: any;
  @Output() productSelected: EventEmitter<any> = new EventEmitter();

  onProductClick() {
    this.productSelected.emit(this.product);
  }
}