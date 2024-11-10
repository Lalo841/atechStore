import { Component, OnInit } from '@angular/core';
import { FilterTextService } from '../../communication-services/filter-text.service';

interface Product {
  name: string;
  description: string;
  price: number;
  rating: number;
  warranty: number; 
  manufacturer: string;
  img: string;
}

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  selectedText: string = 'Все';

  products: Product[] = [
    { name: 'Корпус Coguar Duoface', price: 11000, rating: 3, warranty: 10, manufacturer: 'Coguar', img: 'img-devices/image1.png', description: 'Среднеразмерный корпус Cougar Duoface Pro RGB White белого цвета и ARGB-подсветкой. ' },
    { name: 'Процессор i5 12400F', price: 12000, rating: 3, warranty: 20, manufacturer: 'Coguar', img: 'img-devices/image2.png', description: 'Процессор Intel Core i5-12400F OEM LGA 1700, 6 x 2.5 ГГц, L2 - 7.5 МБ, L3 - 18 МБ, 2 х DDR4, DDR5-4800 МГц, TDP 117 ' },
    { name: 'Процессор i5 12400F', price: 13000, rating: 3, warranty: 30, manufacturer: 'Coguar', img: 'img-devices/image3.png', description: 'Процессор Intel Core i5-12400F OEM LGA 1700, 6 x 2.5 ГГц, L2 - 7.5 МБ, L3 - 18 МБ, 2 х DDR4, DDR5-4800 МГц, TDP 117 ' },
    { name: 'Процессор i5 12400F', price: 14000, rating: 3, warranty: 40, manufacturer: 'Coguar', img: 'img-devices/image4.png', description: 'Процессор Intel Core i5-12400F OEM LGA 1700, 6 x 2.5 ГГц, L2 - 7.5 МБ, L3 - 18 МБ, 2 х DDR4, DDR5-4800 МГц, TDP 117 ' },
    { name: 'Процессор i5 12400F', price: 15000, rating: 3, warranty: 50, manufacturer: 'Coguar', img: 'img-devices/image5.png', description: 'Процессор Intel Core i5-12400F OEM LGA 1700, 6 x 2.5 ГГц, L2 - 7.5 МБ, L3 - 18 МБ, 2 х DDR4, DDR5-4800 МГц, TDP 117 ' },
    { name: 'Процессор i5 12400F', price: 16000, rating: 3, warranty: 60, manufacturer: 'Coguar', img: 'img-devices/image6.png', description: 'Процессор Intel Core i5-12400F OEM LGA 1700, 6 x 2.5 ГГц, L2 - 7.5 МБ, L3 - 18 МБ, 2 х DDR4, DDR5-4800 МГц, TDP 117 ' },
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

  // Функция фильтрации товаров по цене и гарантии
  filterProducts() {
    this.filteredProducts = this.products.filter(product => {
      const price = product.price;
      const warranty = product.warranty;

      const isAboveMinPrice = this.minPrice !== null ? price >= this.minPrice : true;
      const isBelowMaxPrice = this.maxPrice !== null ? price <= this.maxPrice : true;

      const isAboveMinWarranty = this.minWarranty !== null ? warranty >= this.minWarranty : true;
      const isBelowMaxWarranty = this.maxWarranty !== null ? warranty <= this.maxWarranty : true;

      return isAboveMinPrice && isBelowMaxPrice && isAboveMinWarranty && isBelowMaxWarranty;
    });
  }

  // Метод, который обновляет фильтрацию товаров на основе цен и гарантии
  onFiltersChange(filters: { minPrice: number | null, maxPrice: number | null, minWarranty: number | null, maxWarranty: number | null }) {
    this.minPrice = filters.minPrice;
    this.maxPrice = filters.maxPrice;
    this.minWarranty = filters.minWarranty;
    this.maxWarranty = filters.maxWarranty;

    this.filterProducts(); // Применяем фильтрацию после получения значений
  }
}

