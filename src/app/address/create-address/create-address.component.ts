import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment';

@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.component.html',
  styleUrls: ['./create-address.component.css']
})
export class CreateAddressComponent {
  constructor(private http: HttpClient) {
  }

  create(addressTitle:string,city:string,address:string,zipcode:string) {
   debugger;
    const headers = { 'content': 'application/json' };
    const body = {
      "addressTitle": addressTitle,
      "city": city,
      "address": address,
      "zip": zipcode,
      "userId": sessionStorage.getItem("sessionUserId"),
    };
    console.log(body);
    this.http.post<any>(environment.API_URL+'/Address', body, { headers }).subscribe(data => {
      if(data == true)
      {
        window.location.href = "/basket";
      }
    });
    
  }
}
