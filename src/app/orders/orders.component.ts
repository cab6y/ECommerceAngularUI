import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment';
interface Product {
  sayac?:number,
  id: string,
	title: string;
	description: string;
	price: string;
	imageUrl: string;
}
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  products : Product[] = []; 
  userName? : string = "";
  constructor(private http: HttpClient) {
    this.http.get<Product[]>(environment.API_URL+'/Order?userId='+sessionStorage.getItem("sessionUserId")).subscribe(data => {
      this.products = data;
    });
    this.userName = sessionStorage.getItem("sessionUserName")?.toString();
  }

  DeleteOrder(id:string){
    debugger;
    this.http.delete<any>(environment.API_URL+'/Order?userId='+sessionStorage.getItem("sessionUserId")+'&productId='+id).subscribe(data => {
      this.products = data;
    });
  }
}
