import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent {
  constructor(){
    
  }
 onReady(){
    if(sessionStorage.getItem("sessionUserName") != ""){
    (document.querySelector('.login') as HTMLElement).style.display = 'none';
      (document.querySelector('.Register') as HTMLElement).style.display = 'none';
      (document.querySelector('.logout') as HTMLElement).style.display = '';
      (document.querySelector('.orders') as HTMLElement).style.display = '';
      (document.querySelector('.products') as HTMLElement).style.display = '';
    }
  }
  logout(){
  sessionStorage.setItem("sessionUserName","");
  sessionStorage.setItem("sessionUserId","");
  (document.querySelector('.login') as HTMLElement).style.display = '';
  (document.querySelector('.Register') as HTMLElement).style.display = '';
  (document.querySelector('.logout') as HTMLElement).style.display = 'none';
  (document.querySelector('.orders') as HTMLElement).style.display = 'none';
  (document.querySelector('.products') as HTMLElement).style.display = 'none';
 }
}
