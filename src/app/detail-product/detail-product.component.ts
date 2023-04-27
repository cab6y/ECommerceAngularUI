import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from "@angular/router"
import { environment } from '../environment';
interface Product {
  id: string,
	title: string;
	description: string;
	price: string;
	imageUrl: string;
}

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
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
  addBasket(){
    const body = {
      "productId": this.id,
      "quantity": 1,
      "userId": sessionStorage.getItem("sessionUserId"),
      "creatorId": sessionStorage.getItem("sessionUserId"),
    };
    const headers = { 'content': 'application/json' };
    this.http.post<any>(environment.API_URL+'/Basket', body, { headers }).subscribe(data => {
      
    });
  }
}
