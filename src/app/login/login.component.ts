import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { environment } from '../environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http: HttpClient) {
    if(sessionStorage.getItem("sessionUserId") != ""){
      window.location.href="/";

    }
  }

  login(userName:string,password:string){
    const headers = { 'content': 'application/json' };
    this.http.get<string>(environment.API_URL+'/user?userName='+userName+'&password='+password+'', { headers }).subscribe(data => {
      console.log(data);
      if(data != ""){
        debugger;
        sessionStorage.setItem("sessionUserId", data);
        sessionStorage.setItem("sessionUserName", userName);
        console.log(localStorage.getItem('sessionUserName'));
        (document.querySelector('.login') as HTMLElement).style.display = 'none';
        (document.querySelector('.Register') as HTMLElement).style.display = 'none';
        (document.querySelector('.logout') as HTMLElement).style.display = '';
        (document.querySelector('.products') as HTMLElement).style.display = '';
        window.location.href="/";
      }
      else{
        Swal.fire({
          title: 'ERROR',
          text: 'WRONG USERNAME OR PASSWORD!',
          icon: 'error',
          showCancelButton: false,
          confirmButtonText: 'TRY AGAIN!',
        })
      }
    });
  }

}
