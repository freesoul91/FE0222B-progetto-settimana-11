import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Route} from '@angular/router';



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { DetailComponent } from "./detail/detail.component";
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';



const routes : Route [] =[
  {
    path:'',
    component:ProductsComponent
  },

  {
    path:'Cart',
    component:CartComponent
  },
  {
    path:'detail/:id',
    component:DetailComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DetailComponent,
    ProductsComponent,
    CartComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppRoutingModule { }
