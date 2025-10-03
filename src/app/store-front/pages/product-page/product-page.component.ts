import { Component, inject, resource, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '@products/services/products.service';
import { firstValueFrom } from 'rxjs';
import { ProductCarouselComponent } from "@products/components/product-carousel/product-carousel.component";
const hola= signal(['f','f','f']);
@Component({
  selector: 'app-product-page',
  imports: [ProductCarouselComponent],
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent {
  activatedRoute=inject(ActivatedRoute);
  productService=inject(ProductsService);
  productIdSlug:string=this.activatedRoute.snapshot.params['idSlug'];

  productResourse= resource({
    params:()=>({idSlug:this.productIdSlug}),
    loader:async ({params})=>{
      return await firstValueFrom( this.productService.getProductByIdSlug(params.idSlug))
    }
  })
}
