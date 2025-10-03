import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';
const baseUrl=environment.baseURL;
@Pipe({
  name: 'productImage'
})

export class ProductImagePipe implements PipeTransform {
  transform(value: string|string[]): string{
    if(typeof value=='string'){
      return`${baseUrl}/files/produt/${value}`
    }
    const image=value.at(0);
    if(!image){
      return './assets/images/no-image.jpg'
    }
    return `${baseUrl}/files/product/${image}`;
  }
}
