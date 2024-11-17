import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalWindowSignInComponent } from '../../components/modal-window-sign-in/modal-window-sign-in.component';
import { ModalWindowSignUpComponent } from '../../components/modal-window-sign-up/modal-window-sign-up.component';

@Injectable({
  providedIn: 'root'  // Сервис автоматически доступен во всем приложении
})
export class ModalService {
  private signInDialogRef: MatDialogRef<ModalWindowSignInComponent> | null = null;
  private signUpDialogRef: MatDialogRef<ModalWindowSignUpComponent> | null = null;

  constructor(private dialog: MatDialog) {}

  // Открытие модального окна для входа
  openSignInModal(): void {
    this.signInDialogRef = this.dialog.open(ModalWindowSignInComponent, {
      width: '400px',
      disableClose: true,
    });
    this.signInDialogRef.backdropClick().subscribe(() => this.closeSignInModal());
  }

  // Закрытие модального окна для входа
  closeSignInModal(): void {
    if (this.signInDialogRef) {
      this.signInDialogRef.close();
      this.signInDialogRef = null;
    }
  }

  // Открытие модального окна для регистрации
  openSignUpModal(): void {
    this.signUpDialogRef = this.dialog.open(ModalWindowSignUpComponent, {
      width: '400px',
      disableClose: true,
    });
    this.signUpDialogRef.backdropClick().subscribe(() => this.closeSignUpModal());
  }

  // Закрытие модального окна для регистрации
  closeSignUpModal(): void {
    if (this.signUpDialogRef) {
      this.signUpDialogRef.close();
      this.signUpDialogRef = null;
    }
  }
}