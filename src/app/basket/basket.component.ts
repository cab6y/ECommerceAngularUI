import { Component } from '@angular/core';
import { environment } from '../environment';
import { HttpClient } from '@angular/common/http';
interface Product {
  sayac?:number,
  id: string,
	title: string;
	description: string;
	price: string;
	imageUrl: string;
}
@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  products : Product[] = []; 
  constructor(private http: HttpClient){
    this.http.get<Product[]>(environment.API_URL+'/Basket?userId='+sessionStorage.getItem("sessionUserId")).subscribe(data => {
      this.products = data;
      console.log(this.products);
    });
  }

  CreateOrder(){
    const headers = { 'content': 'application/json' };
   
    this.http.post<any>(environment.API_URL+'/Order?userId='+sessionStorage.getItem("sessionUserId"), { headers }).subscribe(data => {
     if(data == true)
     {
      window.location.href = "/"
     }
    });
  }
  DeleteBasket(id:string){
    const headers = { 'content': 'application/json' };
   
    this.http.delete<any>(environment.API_URL+'/Basket?userId='+sessionStorage.getItem("sessionUserId")+"&productId="+id, { headers }).subscribe(data => {
     if(data == true)
     {
      window.location.href = "/basket"
     }
    });
  }
}
