import { Component, inject, resource } from '@angular/core';
import { ProductCardComponent } from '../../../products/components/product-card/product-card.component';
import { ProductsService } from '@products/services/products.service';
import { PaginationComponent } from "@shared/components/pagination/pagination.component";
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { firstValueFrom, map } from 'rxjs';
import { PaginationService } from '@shared/components/pagination/pagination.service';

@Component({
  selector: 'app-home-page',
  imports: [ProductCardComponent, PaginationComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  productsService=inject(ProductsService);
  paginationService=inject(PaginationService)
  productsResource = resource({
  params: () => ({ page:this.paginationService.currentPage()-1 }),
  loader: async({ params }) => {
    return await firstValueFrom( this.productsService.getProducts({
      offset: params.page * 9,
    }),
  )
  }
  });
}
