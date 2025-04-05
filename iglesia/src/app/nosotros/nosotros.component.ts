import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-nosotros',
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {

  public pastores: any[] = [
  { nombre: 'Pastor 1',
     imagen: 'assets/personal/download-removebg-preview.png',
     descripcion: 'Descripción del Pastor 1' },
     { nombre: 'Pastor 1',
      imagen: 'assets/personal/images-removebg-preview.png',
      descripcion: 'Descripción del Pastor 1' },
      { nombre: 'Pastor 1',
       imagen: 'assets/personal/images-removebg-preview.png',
       descripcion: 'Descripción del Pastor 1' },
       { nombre: 'Pastor 1',
        imagen: 'assets/personal/download-removebg-preview.png',
        descripcion: 'Descripción del Pastor 1' }
  
]

}
