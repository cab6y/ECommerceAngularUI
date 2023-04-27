import { Component } from '@angular/core';
import { environment } from '../../environment';
import { HttpClient } from '@angular/common/http';
interface Address {
  sayac?:number,
  id: string,
	addressTitle: string;
	city: string;
	address: string;
	zip: string;
}
@Component({
  selector: 'app-chose-address',
  templateUrl: './chose-address.component.html',
  styleUrls: ['./chose-address.component.css']
})
export class ChoseAddressComponent {
  address : Address[] = []; 
  constructor(private http: HttpClient){
    this.http.get<Address[]>(environment.API_URL+'/Address/GetList?userId='+sessionStorage.getItem("sessionUserId")).subscribe(data => {
      this.address = data;
      console.log(this.address);
    });
  }
  CreateOrder(AddressId:string){
    const headers = { 'content': 'application/json' };
   
    this.http.post<any>(environment.API_URL+'/Order?userId='+sessionStorage.getItem("sessionUserId")+'&addressId='+AddressId, { headers }).subscribe(data => {
     if(data == true)
     {
      window.location.href = "/"
     }
    });
  }
}
