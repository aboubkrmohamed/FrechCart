import { Component } from '@angular/core';

import{FormGroup,FormControl,Validators} from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  constructor(private _authService:AuthService , private _router:Router){
    if(localStorage.getItem('userToken') !==null)
    {
     _router.navigate(['/home'])
    }
  }

  loginForm:FormGroup=new FormGroup({
      
     email:new FormControl(null ,[Validators.required,Validators.email]),
     password:new FormControl(null ,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)])
  })


  isLogin:boolean=false;
  apisError:string='';
  handelLogin(loginForm:FormGroup)
  {

    this.isLogin=true;

    if(loginForm.valid)
    {
      this._authService.login(loginForm.value).subscribe({

        next:(response)=> {
        if (response.message=='success')
        {
          localStorage.setItem('userToken',response.token); 
          this._authService.decodeUserData();
          this.isLogin=false;
          this._router.navigate(['/home'])
        }
      }, 


        error:(err)=> {
          this.isLogin=false;
          this.apisError=err.error.errors.msg;
          // console.log()
        },

      })
    }
  }

}
