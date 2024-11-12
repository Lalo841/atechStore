// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-list-product-card-catalog',
//   templateUrl: './list-product-card-catalog.component.html',
//   styleUrl: './list-product-card-catalog.component.scss'
// })
// export class ListProductCardCatalogComponent {
//   @Input() products!: any; 
// }

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-product-card-catalog',
  templateUrl: './list-product-card-catalog.component.html',
  styleUrls: ['./list-product-card-catalog.component.scss']
})
export class ListProductCardCatalogComponent {
  @Input() products!: any;
  @Output() productSelected: EventEmitter<any> = new EventEmitter();

  onProductSelected(product: any) {
    this.productSelected.emit(product);
  }
}