import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  constructor(private http: HttpClient) {
  }
  create(title:string,description:string,price:string,imageUrl:string) {
   
    const headers = { 'content': 'application/json' };
    const body = {
      "title": title,
      "description": description,
      "price": price,
      "imageUrl": imageUrl,
      "creatorId": sessionStorage.getItem("sessionUserId")
    };
    console.log(body);
    this.http.post<any>(environment.API_URL+'/product', body, { headers }).subscribe(data => {
      if(data == true)
      {
        window.location.href = "/products";
      }
    });
    
  }
  changeImage(imageUrl:string){
    document.getElementById("productImage")?.removeAttribute("src");
    document.getElementById("productImage")?.setAttribute("src",imageUrl);
  }
}
