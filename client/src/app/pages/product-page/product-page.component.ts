import { Component, OnInit } from '@angular/core';
import { FilterTextService } from '../../communication-services/filter-text.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent implements OnInit {
  selectedText: string = 'Все';

  products: any = [
    {
      name: 'Корпус Coguar Duoface',
      description:
        'Среднеразмерный корпус Cougar Duoface Pro RGB White белого цвета и ARGB-подсветкой. ',
      price: 11000,
      rating: 3,
      warranty: false,
      manufacturer: 'Coguar',
      img: 'img-devices/image1.png',
    },
    {
      name: 'Процессор i5 12400F',
      description:
        'Процессор Intel Core i5-12400F OEM LGA 1700, 6 x 2.5 ГГц, L2 - 7.5 МБ, L3 - 18 МБ, 2 х DDR4, DDR5-4800 МГц, TDP 117 ',
      price: 11000,
      rating: 3,
      warranty: false,
      manufacturer: 'Coguar',
      img: 'img-devices/image2.png',
    },
    {
      name: 'Процессор i5 12400F',
      description:
        'Процессор Intel Core i5-12400F OEM LGA 1700, 6 x 2.5 ГГц, L2 - 7.5 МБ, L3 - 18 МБ, 2 х DDR4, DDR5-4800 МГц, TDP 117 ',
      price: 11000,
      rating: 3,
      warranty: false,
      manufacturer: 'Coguar',
      img: 'img-devices/image3.png',
    },
    {
      name: 'Процессор i5 12400F',
      description:
        'Процессор Intel Core i5-12400F OEM LGA 1700, 6 x 2.5 ГГц, L2 - 7.5 МБ, L3 - 18 МБ, 2 х DDR4, DDR5-4800 МГц, TDP 117 ',
      price: 11000,
      rating: 3,
      warranty: false,
      manufacturer: 'Coguar',
      img: 'img-devices/image4.png',
    },
    {
      name: 'Процессор i5 12400F',
      description:
        'Процессор Intel Core i5-12400F OEM LGA 1700, 6 x 2.5 ГГц, L2 - 7.5 МБ, L3 - 18 МБ, 2 х DDR4, DDR5-4800 МГц, TDP 117 ',
      price: 11000,
      rating: 3,
      warranty: false,
      manufacturer: 'Coguar',
      img: 'img-devices/image5.png',
    },
    {
      name: 'Процессор i5 12400F',
      description:
        'Процессор Intel Core i5-12400F OEM LGA 1700, 6 x 2.5 ГГц, L2 - 7.5 МБ, L3 - 18 МБ, 2 х DDR4, DDR5-4800 МГц, TDP 117 ',
      price: 11000,
      rating: 3,
      warranty: false,
      manufacturer: 'Coguar',
      img: 'img-devices/image6.png',
    },
  ];

  constructor(private filterTextService: FilterTextService) {}
  ngOnInit(): void {
    this.filterTextService.currentText$.subscribe((text) => {
      this.selectedText = text;
    });
  }
}
