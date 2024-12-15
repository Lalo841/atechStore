import { Component, OnInit} from '@angular/core';
import { ModalService } from '../../services/modal-service/modal.service';
import { CartService } from '../../services/cart-service/cart.service';
import { UserServiceService } from '../../services/user-service/user-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public cartCounter: number = 0;
  public isAuth = false;

  constructor(
    private modalService: ModalService, 
    private cartService: CartService,
    private userService: UserServiceService
  ) {}
  
  ngOnInit(): void {
    this.cartService.getCount.subscribe((count) => (this.cartCounter = count));
    this.userService.checkAuth().subscribe(res => this.isAuth = res);
  }
  logoutHandler():void{
    this.userService.logout();
  }

  openSignInModal(): void {
    this.modalService.openSignInModal();
  }
}