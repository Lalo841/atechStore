import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../../services/cart-service/cart.service';

@Component({
  selector: 'app-product-card-catalog',
  templateUrl: './product-card-catalog.component.html',
  styleUrls: ['./product-card-catalog.component.scss'],
})
export class ProductCardCatalogComponent {
  @Input() product!: any;
  @Output() productSelected: EventEmitter<any> = new EventEmitter();

  constructor(private cartService: CartService){}

  addBtnHandler(){
    this.cartService.addToCart(this.product);
  }

  onProductClick() {
    this.productSelected.emit(this.product);
  }
}