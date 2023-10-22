import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrandsComponent } from './brands/brands.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsComponent } from './products/products.component';
import { GuardGuard } from './guard.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', canActivate:[GuardGuard], component:HomeComponent},
  {path:'about', canActivate:[GuardGuard], component:AboutComponent},
  {path:'brands', canActivate:[GuardGuard], component:BrandsComponent},
  {path:'cart', canActivate:[GuardGuard], component:CartComponent},
  {path:'productDetails/:id', canActivate:[GuardGuard], component:ProductDetailsComponent},
  {path:'categories', canActivate:[GuardGuard], component:CategoriesComponent},
  {path:'products', canActivate:[GuardGuard], component:ProductsComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'**', component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
