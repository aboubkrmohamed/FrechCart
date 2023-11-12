import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  CartDetails:any=null;

constructor(private _CartService:CartService)
{

}

removeitem(productId:string)
{
this._CartService.removeCartItem(productId).subscribe({

  next:(response)=>{
    
    this.CartDetails=response.data;
    console.log(response.data)  },
  
  error:(err)=>console.log(err)

})
}

ngOnInit(): void
{
  this._CartService.getLoggedUserCart().subscribe({

    next:(response)=>{
      this.CartDetails=response.data;
      console.log(response.data)  },
    
    error:(err)=>console.log(err)

  })  
}
}
