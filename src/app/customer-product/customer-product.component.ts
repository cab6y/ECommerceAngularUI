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
  selector: 'app-customer-product',
  templateUrl: './customer-product.component.html',
  styleUrls: ['./customer-product.component.css']
})
export class CustomerProductComponent {
  products : Product[] = []; 
  page = 1;
	pageSize = 4;
  collectionSize = 0;
  constructor(private http: HttpClient) {
    this.http.get<Product[]>(environment.API_URL+'/product/getList').subscribe(data => {
      this.products = data;
      console.log(this.products);
      this.collectionSize = this.products.length;
    });
    this.refreshProducts();
  }

  refreshProducts() {
		this.products = this.products.map((product, i) => ({ sayac: i + 1, ...product })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}

}
