import { Component } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { ModalWindowSignInComponent } from '../modal-window-sign-in/modal-window-sign-in.component';
import { ModalService } from '../../services/modal-service/modal.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private modalService: ModalService) {}

  openSignInModal(): void {
    this.modalService.openSignInModal();
  }
}
