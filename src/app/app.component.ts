import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CarruselComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'unitedstore';

  public precioProducto1:number = 415;
  public precioProducto2:number = 345;
  public precioProducto3:number = 355;
  public precioProducto4:number = 289;

  public contadorProductos:number =0;

  agregarAlCarrito(valor:number):void{
    this.contadorProductos +=valor;
  }

}
