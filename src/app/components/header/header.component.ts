import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public headerOptions:string[] = ['Jerseys','Trainignwear','Fashion','Accessories','Gifts'];

  public  headerIcons:string[] = [`<i class="bi bi-search"></i>`,
                                  `<i class="bi bi-person"></i>`,
                                  `<i class="bi bi-suit-heart"></i>`,
                                  `<i class="bi bi-bag"></i>`]


  @Input() contadorProductos: number= 0

}
