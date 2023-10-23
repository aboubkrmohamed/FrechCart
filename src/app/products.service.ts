import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import{Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(private _HttpClient:HttpClient , private _router:Router) { }


  getProducts():Observable<any>
  {
   return  this._HttpClient.get('https://route-ecommerce.onrender.com/api/v1/products')
  }

  
  getProductsDetails(id:string):Observable<any>
  {
   return  this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`)
  }

    
  getCategories():Observable<any>
  {
   return  this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/categories`)
  }


}
