import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devs-info-page',
  templateUrl: './devs-info-page.component.html',
  styleUrls: ['./devs-info-page.component.scss']
})
export class DevsInfoPageComponent implements OnInit {

  images: string[] = [
    'alex.jpg',
    'egor.jpg',
    'arb.jpg' 
  ];

  currentIndex: number = 0;
  totalImages: number = this.images.length;

  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 3000); // Сменить изображение каждые 3 секунды
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.totalImages;
  }
}