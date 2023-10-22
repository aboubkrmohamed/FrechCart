import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private _authService:AuthService , private _router:Router){
    if(localStorage.getItem('userToken') !==null)
    {
     _router.navigate(['/home'])
    }
  }

  registerForm:FormGroup=new FormGroup({
     name:new FormControl(null ,[Validators.required ,Validators.minLength(3),Validators.maxLength(15)]),
     
     email:new FormControl(null ,[Validators.required,Validators.email]),
     password:new FormControl(null ,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
     rePassword:new FormControl(null ,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
     phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}/)]),
  })


  isLogin:boolean=false;
  apisError:string='';
  handelRegister(registerForm:FormGroup)
  {

    this.isLogin=true;

    if(registerForm.valid)
    {
      this._authService.register(registerForm.value).subscribe({

        next:(response)=> {
        if (response.message=='success')
        {
          this.isLogin=false;
          this._router.navigate(['/login'])
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
