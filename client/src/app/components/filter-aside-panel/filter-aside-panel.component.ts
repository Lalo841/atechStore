

// import { Component, EventEmitter, Output } from '@angular/core';
// import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

// @Component({
//   selector: 'app-filter-aside-panel',
//   templateUrl: './filter-aside-panel.component.html',
//   styleUrls: ['./filter-aside-panel.component.scss']
// })
// export class FilterAsidePanelComponent {
//   addProductFrom: FormGroup;
//   manufacturers: string[] = ['Cougar', 'Intel', 'Deepcool', 'ID-Cooling', 'Adata', 'NVIDIA'];  // Список производителей

//   @Output() filtersChanged = new EventEmitter<{
//     minPrice: number | null;
//     maxPrice: number | null;
//     minWarranty: number | null;
//     maxWarranty: number | null;
//     manufacturer: string | null;  // Новый параметр для фильтрации по производителю
//   }>();

//   constructor(private fb: FormBuilder) {
//     this.addProductFrom = this.fb.group({
//       minPrice: new FormControl(''),
//       maxPrice: new FormControl(''),
//       minWarranty: new FormControl(''),
//       maxWarranty: new FormControl(''),
//       manufacturer: new FormControl('')  // Добавляем контрол для производителя
//     });
//   }

//   sendToParent() {
//     const minPrice = this.addProductFrom.value.minPrice ? +this.addProductFrom.value.minPrice : null;
//     const maxPrice = this.addProductFrom.value.maxPrice ? +this.addProductFrom.value.maxPrice : null;
//     const minWarranty = this.addProductFrom.value.minWarranty ? +this.addProductFrom.value.minWarranty : null;
//     const maxWarranty = this.addProductFrom.value.maxWarranty ? +this.addProductFrom.value.maxWarranty : null;
//     const manufacturer = this.addProductFrom.value.manufacturer || null;  // Получаем выбранного производителя (или null)

//     // Эмитируем все фильтры, включая manufacturer
//     this.filtersChanged.emit({
//       minPrice,
//       maxPrice,
//       minWarranty,
//       maxWarranty,
//       manufacturer  // Добавляем manufacturer в передаваемый объект
//     });
//   }
// }














// рабочая версия


import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter-aside-panel',
  templateUrl: './filter-aside-panel.component.html',
  styleUrls: ['./filter-aside-panel.component.scss']
})
export class FilterAsidePanelComponent {
  addProductFrom: FormGroup;
  manufacturers: string[] = ['Cougar', 'Intel', 'Deepcool', 'ID-Cooling', 'Adata', 'NVIDIA'];  // Список производителей

  @Output() filtersChanged = new EventEmitter<{
    minPrice: number | null;
    maxPrice: number | null;
    minWarranty: number | null;
    maxWarranty: number | null;
    manufacturer: string | null;
  }>();

  constructor(private fb: FormBuilder) {
    this.addProductFrom = this.fb.group({
      minPrice: new FormControl('', [
        Validators.min(1),  // Минимальная стоимость 1 рубль
      ]),
      maxPrice: new FormControl('', [
        Validators.max(1000000),  // Максимальная стоимость 1 миллион рублей
      ]),
      minWarranty: new FormControl('', [
        Validators.min(12),  // Минимальная гарантия 12 месяцев
      ]),
      maxWarranty: new FormControl('', [
        Validators.max(120),  // Максимальная гарантия 10 лет (120 месяцев)
      ]),
      manufacturer: new FormControl('')  // Добавляем контрол для производителя
    });
  }

  sendToParent() {
    const minPrice = this.addProductFrom.value.minPrice ? +this.addProductFrom.value.minPrice : null;
    const maxPrice = this.addProductFrom.value.maxPrice ? +this.addProductFrom.value.maxPrice : null;
    const minWarranty = this.addProductFrom.value.minWarranty ? +this.addProductFrom.value.minWarranty : null;
    const maxWarranty = this.addProductFrom.value.maxWarranty ? +this.addProductFrom.value.maxWarranty : null;
    const manufacturer = this.addProductFrom.value.manufacturer || null;  // Получаем выбранного производителя (или null)

    // Эмитируем все фильтры, включая manufacturer
    this.filtersChanged.emit({
      minPrice,
      maxPrice,
      minWarranty,
      maxWarranty,
      manufacturer  // Добавляем manufacturer в передаваемый объект
    });
  }

  // Helper method to get form control errors
  getFormControlError(controlName: string) {
    const control = this.addProductFrom.get(controlName);
    return control && control.errors ? Object.values(control.errors) : [];
  }

  removeLeadingZeros(event: any, controlName: string): void {
    let value = event.target.value;
  
    // Убираем ведущие нули, если они есть
    value = value.replace(/^0+/, '');
  
    // Присваиваем обновленное значение в контрол
    this.addProductFrom.get(controlName)?.setValue(value);
  }

  closeError(fieldName: string) {
    // Сбросим ошибку для указанного поля
    const control = this.addProductFrom.get(fieldName);
    if (control) {
      control.setErrors(null); // Убираем ошибку
    }
  }
  
}


