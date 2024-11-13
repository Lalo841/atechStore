import { Component, OnInit } from '@angular/core';
import { FilterTextService } from '../../communication-services/filter-text.service';
import { Product } from '../../components/product.model';  // Импортируем интерфейс

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  
  selectedText: string = 'Все';
  openTheDoor: boolean = false;  //открыто ли окно
  selectedProduct: Product | null = null;  // Текущий выбранный продукт

  products: Product[] = [
    { 
      name: 'Корпус Cougar Duoface Pro', 
      price: 11990,  
      rating: 4.5, 
      warranty: 24, 
      manufacturer: 'Cougar', 
      img: 'img-devices/image2.png', 
      description: 'Среднеразмерный корпус Cougar Duoface Pro RGB с поддержкой ARGB-подсветки, обеспечивающий отличную вентиляцию и стильный внешний вид.' 
    },
    { 
      name: 'Процессор Intel Core i5-12400F', 
      price: 14990,  
      rating: 4.7, 
      warranty: 36, 
      manufacturer: 'Intel', 
      img: 'img-devices/image1.png', 
      description: 'Процессор Intel Core i5-12400F, 6 ядер, 12 потоков, базовая частота 2.5 ГГц, поддержка памяти DDR4/DDR5, идеален для современных игр и рабочих задач.' 
    },
    { 
      name: 'Блок питания Deepcool DA500', 
      price: 3990,  
      rating: 4.6, 
      warranty: 36, 
      manufacturer: 'Deepcool', 
      img: 'img-devices/image3.png', 
      description: 'Блок питания Deepcool DA500 мощностью 500 Вт с сертификатом 80+ Bronze, идеален для сборок среднего уровня.' 
    },
    { 
      name: 'Система охлаждения ID-Cooling SE-224-XT', 
      price: 3990,  
      rating: 4.5, 
      warranty: 36, 
      manufacturer: 'ID-Cooling', 
      img: 'img-devices/image4.png', 
      description: 'Процессорный кулер ID-Cooling SE-224-XT с 4 тепловыми трубками и 120 мм вентилятором, обеспечивающий отличное охлаждение для мощных процессоров.' 
    },
    { 
      name: 'Оперативная память Adata XPG Gammix D30 DDR4 16GB (2x8GB) 3200MHz', 
      price: 7490,  
      rating: 4.7, 
      warranty: 36, 
      manufacturer: 'Adata', 
      img: 'img-devices/image5.png', 
      description: 'Оперативная память Adata XPG Gammix D30 DDR4 16GB (2x8GB) с частотой 3200 МГц, обеспечивающая отличную производительность в играх и приложениях.' 
    },
    { 
      name: 'Видеокарта NVIDIA GeForce RTX 4060', 
      price: 39990,  
      rating: 4.7, 
      warranty: 36, 
      manufacturer: 'NVIDIA', 
      img: 'img-devices/image6.png', 
      description: 'Видеокарта NVIDIA GeForce RTX 4060 с архитектурой Ada Lovelace, поддержка DLSS 3.0 и Ray Tracing, идеальна для игр в 1440p и 4K.' 
    }
    
  ];

  constructor(private filterTextService: FilterTextService) {}
  
  ngOnInit(): void {
    this.filterTextService.currentText$.subscribe((text) => {
      this.selectedText = text;
    });
  }

  // Отфильтрованные товары
  filteredProducts: Product[] = [...this.products];

  // Минимальная и максимальная цена и гарантия для фильтрации
  minPrice: number | null = null;
  maxPrice: number | null = null;
  minWarranty: number | null = null;
  maxWarranty: number | null = null;
  selectedManufacturer: string | null = null;  // Новый параметр для фильтрации




// Функция фильтрации товаров
filterProducts() {
  this.filteredProducts = this.products.filter(product => {
    const price = product.price;
    const warranty = product.warranty;

    const isAboveMinPrice = this.minPrice !== null ? price >= this.minPrice : true;
    const isBelowMaxPrice = this.maxPrice !== null ? price <= this.maxPrice : true;

    const isAboveMinWarranty = this.minWarranty !== null ? warranty >= this.minWarranty : true;
    const isBelowMaxWarranty = this.maxWarranty !== null ? warranty <= this.maxWarranty : true;

    const isMatchingManufacturer = this.selectedManufacturer ? product.manufacturer === this.selectedManufacturer : true;

    return isAboveMinPrice && isBelowMaxPrice && isAboveMinWarranty && isBelowMaxWarranty && isMatchingManufacturer;
  });
}

onFiltersChange(filters: { minPrice: number | null, maxPrice: number | null, minWarranty: number | null, maxWarranty: number | null, manufacturer: string | null }) {
  this.minPrice = filters.minPrice;
  this.maxPrice = filters.maxPrice;
  this.minWarranty = filters.minWarranty;
  this.maxWarranty = filters.maxWarranty;
  this.selectedManufacturer = filters.manufacturer;

  this.filterProducts();  // Применяем фильтрацию после получения значений
}



 // Отображение модального окна с выбранным продуктом
 onProductSelected(product: Product) {
  this.selectedProduct = product;
  this.openTheDoor = true; 
}

  // Метод для закрытия модального окна
  closeModal() {
    this.openTheDoor = false;  // Закрыть модальное окно
    this.selectedProduct = null;  // Очистить выбранный продукт
  }

 // Инициализация переменной для хранения состояния сортировки
 selectedSortOrder: string | undefined = undefined; // Включаем undefined по умолчанию

 // Метод для обработки изменения сортировки
 onSortChange(sortOrder: string | undefined) {
   this.selectedSortOrder = sortOrder; // Сохраняем выбранную сортировку

   if (sortOrder === 'asc-price') {
     this.filteredProducts = [...this.filteredProducts].sort((a, b) => a.price - b.price);
   } else if (sortOrder === 'desc-price') {
     this.filteredProducts = [...this.filteredProducts].sort((a, b) => b.price - a.price);
   } else if (sortOrder === 'asc-manufacturer') {
     this.filteredProducts = [...this.filteredProducts].sort((a, b) => a.manufacturer.localeCompare(b.manufacturer));
   } else if (sortOrder === 'desc-manufacturer') {
     this.filteredProducts = [...this.filteredProducts].sort((a, b) => b.manufacturer.localeCompare(a.manufacturer));
   } else if (sortOrder === 'asc-warranty') {
     this.filteredProducts = [...this.filteredProducts].sort((a, b) => a.warranty - b.warranty);
   } else if (sortOrder === 'desc-warranty') {
     this.filteredProducts = [...this.filteredProducts].sort((a, b) => b.warranty - a.warranty);
   } else {
     this.filteredProducts = [...this.products]; // Сброс сортировки
   }
 }

 // Метод для сброса сортировки
 onResetSort() {
   this.filteredProducts = [...this.products];  // Возвращаем исходный список товаров
   this.selectedSortOrder = undefined;  // Сбрасываем выбранную сортировку
 }


 
}


