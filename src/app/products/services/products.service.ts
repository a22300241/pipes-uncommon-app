import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product, ProductsResponse } from '@products/interfaces/product.interface';
import { firstValueFrom, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
const baseUrl=environment.baseURL
interface Options{
  limit?:number;
  offset?:number;
  gender?:string;
}

@Injectable({providedIn: 'root'})
export class ProductsService {
  private http=inject(HttpClient);

  getProducts(opcions: Options): Promise<ProductsResponse> {
  const { limit=9, offset=0, gender='' } = opcions;
  return firstValueFrom(
    this.http.get<ProductsResponse>(`${baseUrl}/products`, {
      params: { limit, offset, gender }
    }).pipe(
    tap((resp) => console.log(resp)))
  );
}
getProductByIdSlug(idSlug:string):Observable<Product>{
  return this.http.get<Product>(`${baseUrl}/products/${idSlug}`);

}


 /* getProducts(opcions: Options): Observable<ProductsResponse> {
  const { limit=9, offset=0, gender='' } = opcions;
  return this.http.get<ProductsResponse>(`${baseUrl}/products`, {
    params: { limit, offset, gender }
  }).pipe(
    tap((resp) => console.log(resp))
  );
}
 */
}
