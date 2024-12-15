import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../services/modal-service/modal.service';
import { UserServiceService } from '../../services/user-service/user-service.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-modal-window-sign-up',
  templateUrl: './modal-window-sign-up.component.html',
  styleUrls: ['./modal-window-sign-up.component.scss'],
})
export class ModalWindowSignUpComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(private fb: FormBuilder, private modalService: ModalService, private userService: UserServiceService) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email: [
        '', // Начальное значение
        [
          Validators.required,
          Validators.email,
          Validators.minLength(10),
          Validators.maxLength(20),
        ],
      ],
      password: [
        '', // Начальное значение
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16),
        ],
      ],
    });
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  getEmailErrorMessage(): string {
    if (this.email?.hasError('required')) {
      return 'Email обязателен.';
    }
    if (this.email?.hasError('email')) {
      return 'Пожалуйста, введите корректный email-адрес.';
    }
    if (this.email?.hasError('minlength')) {
      return 'Длина email должна быть не менее 10 символов.';
    }
    if (this.email?.hasError('maxlength')) {
      return 'Длина email должна быть не более 20 символов.';
    }
    return '';
  }

  getPasswordErrorMessage(): string {
    if (this.password?.hasError('required')) {
      return 'Пароль обязателен.';
    }
    if (this.password?.hasError('minlength')) {
      return 'Длина пароля должна быть не менее 8 символов.';
    }
    if (this.password?.hasError('maxlength')) {
      return 'Длина пароля должна быть не более 16 символов.';
    }
    return '';
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      //console.log(this.signUpForm.value); // Логика отправки данных на сервер
      this.userService.register(this.signUpForm.value.email, this.signUpForm.value.password).subscribe(res => {
        const userInfo = jwtDecode(res.token);
        localStorage.setItem("user", JSON.stringify(userInfo));
      });
      this.modalService.closeSignUpModal();
    }
  }
}
