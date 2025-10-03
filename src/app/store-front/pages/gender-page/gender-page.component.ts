import { Component, inject, resource } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom, map } from 'rxjs';
import { Gender } from '../../../products/interfaces/product.interface';
import { ProductsService } from '@products/services/products.service';
import { ProductCardComponent } from "@products/components/product-card/product-card.component";

@Component({
  selector: 'app-gender-page',
  imports: [ProductCardComponent],
  templateUrl: './gender-page.component.html',
})
export class GenderPageComponent {
  router=inject(ActivatedRoute);
  gender=toSignal(
    this.router.params.pipe(
      map(({gender})=>gender)
    )
  )
  productsService=inject(ProductsService);

  productsResource = resource({
  params: () => ({ gender:this.gender() }),
  loader: async({ params }) => {
    return this.productsService.getProducts({
      gender:params.gender
    });
  }
  });




}
