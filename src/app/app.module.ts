import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CreateProductComponent } from './Product/create-product/create-product.component';
import { ProductsComponent } from './Product/products/products.component';
import { EditProductComponent } from './Product/edit-product/edit-product.component';
import { CustomerProductComponent } from './customer-product/customer-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { BasketComponent } from './basket/basket.component';
import { OrdersComponent } from './orders/orders.component';
import { ChoseAddressComponent } from './address/chose-address/chose-address.component';
import { CreateAddressComponent } from './address/create-address/create-address.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegisterComponent,
    LoginComponent,
    CreateProductComponent,
    ProductsComponent,
    EditProductComponent,
    CustomerProductComponent,
    DetailProductComponent,
    BasketComponent,
    OrdersComponent,
    ChoseAddressComponent,
    CreateAddressComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'menu', component: MenuComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
      {path: 'createProduct', component: CreateProductComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'editProduct/:id', component: EditProductComponent},
      {path: 'trade', component: CustomerProductComponent},
      {path: 'basket', component: BasketComponent},
      {path: 'detailProduct/:id', component: DetailProductComponent},
      {path: 'orders', component: OrdersComponent},
      {path: 'ChoseAddress', component: ChoseAddressComponent},
      {path: 'CreateAddress', component: CreateAddressComponent},
    ]),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
