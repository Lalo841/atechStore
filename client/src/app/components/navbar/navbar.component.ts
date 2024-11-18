import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { ModalWindowSignInComponent } from '../modal-window-sign-in/modal-window-sign-in.component';
import { ModalService } from '../../services/modal-service/modal.service';
import { CartService } from '../../services/cart-service/cart.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  public cartCounter: number = 0;
  constructor(
    private modalService: ModalService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartService.getCount.subscribe((count) => (this.cartCounter = count));
  }

  openSignInModal(): void {
    this.modalService.openSignInModal();
  }
}
