import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  public footerCategories:string[]=['Kits','Women','Training','Kids']
  public footerMoreCategories:string[]=['My Account','Memberships']
  public footerCustomerCare:string[]=['Help','Delivery & Shipping']
  public footerExploreOptions:string[]=['Manchester United Official','Tickets','Store Location']
  public footerLegalOptions:string[]=['Terms','Privacy','Cookies','Anti Slavery','Terms of Sale','EU Supplier Representatives']

  public  footerIcons:string[] = [`<i class="bi bi-youtube"></i>`,
                                  `<i class="bi bi-twitter-x"></i>`,
                                  `<i class="bi bi-facebook"></i>`,
                                  `<i class="bi bi-instagram"></i>`,
                                  `<i class="bi bi-pinterest"></i>`]

}
