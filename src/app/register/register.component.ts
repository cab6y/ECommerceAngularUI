import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public url: string = "https://localhost:7178/";
  public params: string = "";
  constructor(private http: HttpClient) {
  }


  register(name: string, surname: string, username: string, password: string) {
   
    const headers = { 'content': 'application/json' };
    const body = {
      "userName": username,
      "name": name,
      "surname": surname,
      "password": password
    };
    console.log(body);
    this.http.post<any>('https://localhost:7178/User', body, { headers }).subscribe(data => {
        
    });
    
  }

}
