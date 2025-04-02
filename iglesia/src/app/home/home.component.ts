import { Component, ElementRef, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

// Bootstrap Carousel solo se importa si estamos en el navegador
declare let bootstrap: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('carouselExampleInterval', { static: false }) carouselElement!: ElementRef;
  private carouselInstance: any;

  imagenes = [
    { img: 'assets/banner-carrucel/banner-1.avif', alt: 'Imagen 1' },
    { img: 'assets/banner-carrucel/banner-2.jpeg', alt: 'Imagen 2' },
    { img: 'assets/banner-carrucel/banner-3.jpeg', alt: 'Imagen 3' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {  // ✅ Solo ejecuta en el navegador
      import('bootstrap').then((bootstrap) => {
        this.carouselInstance = new bootstrap.Carousel(this.carouselElement.nativeElement, {
          interval: 5000,
          ride: 'carousel'
        });
      });
    }
  }

  prevSlide() {
    if (this.carouselInstance) this.carouselInstance.prev();
  }

  nextSlide() {
    if (this.carouselInstance) this.carouselInstance.next();
  }
}

