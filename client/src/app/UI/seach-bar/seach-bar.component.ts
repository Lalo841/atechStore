// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-seach-bar',
//   templateUrl: './seach-bar.component.html',
//   styleUrl: './seach-bar.component.scss'
// })
// export class SeachBarComponent {

// }

// import { Component, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-seach-bar',
//   templateUrl: './seach-bar.component.html',
//   styleUrls: ['./seach-bar.component.scss'],
// })
// export class SeachBarComponent {
//   @Output() searchTextChanged = new EventEmitter<string>();  // Эмиттер для передачи значения

//   searchText: string = '';

//   onSearchChange(): void {
//     this.searchTextChanged.emit(this.searchText);  // Отправляем введенный текст
//   }
// }

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seach-bar',
  templateUrl: './seach-bar.component.html',
  styleUrls: ['./seach-bar.component.scss'],
})
export class SeachBarComponent {
  @Output() searchTextChanged = new EventEmitter<string>();  // Эмиттер для передачи значения

  searchText: string = '';

  onSearchChange(): void {
    this.searchTextChanged.emit(this.searchText);  // Отправляем введенный текст
  }
}