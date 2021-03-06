import { Component, OnInit } from '@angular/core';

import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper/core';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements OnInit {

  constructor() { }

  images: string[] = [
    'assets/images/banner-1.jpg',
    'assets/images/banner-2.jpg',
    'assets/images/banner-3.jpg'
  ];

  ngOnInit(): void {

  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }

  onSlideChange() {
    console.log('slide change');
  }
}
