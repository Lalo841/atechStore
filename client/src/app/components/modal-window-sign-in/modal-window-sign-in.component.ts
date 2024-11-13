import { Component } from '@angular/core';
// import { MatDialog, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
// import { ModalWindowSignUpComponent } from '../modal-window-sign-up/modal-window-sign-up.component';
// import { NavbarComponent } from '../navbar/navbar.component';
import { ModalService } from '../../services/modal-service/modal.service';
@Component({
  selector: 'app-modal-window-sign-in',
  templateUrl: './modal-window-sign-in.component.html',
  styleUrls: ['./modal-window-sign-in.component.scss']
})
export class ModalWindowSignInComponent {
  constructor(private modalService: ModalService) {}

  openSignUpModal(): void {
    this.modalService.closeSignInModal()
    this.modalService.openSignUpModal();
  }
}