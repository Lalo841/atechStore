import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalWindowSignInComponent } from '../modal-window-sign-in/modal-window-sign-in.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private dialog: MatDialog) {}

  openSignInModal(): void {
    const dialogRef = this.dialog.open(ModalWindowSignInComponent, {
      width: '400px',
      disableClose: true,
    });
    dialogRef.backdropClick().subscribe(() => {
      dialogRef.close(); // закрывает при клике на задний фон
    });
  }
}
