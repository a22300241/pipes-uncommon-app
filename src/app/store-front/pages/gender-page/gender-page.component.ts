import { Component, inject, resource } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom, map } from 'rxjs';
import { Gender } from '../../../products/interfaces/product.interface';
import { ProductsService } from '@products/services/products.service';
import { ProductCardComponent } from "@products/components/product-card/product-card.component";
import { PaginationComponent } from "@shared/components/pagination/pagination.component";
import { PaginationService } from '@shared/components/pagination/pagination.service';

@Component({
  selector: 'app-gender-page',
  imports: [ProductCardComponent, PaginationComponent],
  templateUrl: './gender-page.component.html',
})
export class GenderPageComponent {
  paginationService=inject(PaginationService)
  router=inject(ActivatedRoute);
  gender=toSignal(
    this.router.params.pipe(
      map(({gender})=>gender)
    )
  )
  productsService=inject(ProductsService);

  productsResource = resource({
  params: () => ({ gender:this.gender(),page:this.paginationService.currentPage()-1}),
  loader: async({ params }) => {
    return await firstValueFrom( this.productsService.getProducts({
      gender:params.gender,
      offset:params.page*9,
    }));

  }
  });




}
