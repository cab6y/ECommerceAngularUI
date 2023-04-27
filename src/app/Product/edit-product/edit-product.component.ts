import { Component, Input } from "@angular/core";
import {ActivatedRoute} from "@angular/router"
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment';
interface Product {
  id: string,
	title: string;
	description: string;
	price: string;
	imageUrl: string;
}
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  id?:string= "";
  product? : Product; 
  constructor(private activatedRoute:ActivatedRoute,private http: HttpClient){

  }
  ngOnInit() {
      this.id=  this.activatedRoute.snapshot.paramMap.get('id')?.toString();
      const headers = { 'content': 'application/json' };
      this.http.get<Product>(environment.API_URL+'/product?id='+this.id, { headers }).subscribe(data => {
        
        this.product = data;
        console.log(this.product);
      });
  }
  edit(title:string,description:string,price:string,imageUrl:string){
    debugger;
    const headers = { 'content': 'application/json' };
    const body = {
      "id": this.id,
  "updaterId": sessionStorage.getItem("sessionUserId"),
  "title": title,
  "description": description,
  "price": price,
  "imageUrl": imageUrl
    };
    console.log(body);
    this.http.put<any>('https://localhost:7178/product', body, { headers }).subscribe(data => {
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
