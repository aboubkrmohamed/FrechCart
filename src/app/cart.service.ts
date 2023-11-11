import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private  _HttpClient:HttpClient) { }
  headers:any=
  {
    token:localStorage.getItem('userToken')
  }

  addToCart (productId:string):Observable<any>
  {
    return this._HttpClient.post(`https://route-ecommerce.onrender.com/api/v1/cart` , 
    {productId:productId},
    {headers:this.headers}
    )
  }

  getLoggedUserCart ():Observable<any>

  {
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/cart` , 
    {headers:this.headers}
    )
  }

  removeCartItem (productId:string):Observable<any>
  
  {
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/cart` , 
    {headers:this.headers}
    )
  }


}
