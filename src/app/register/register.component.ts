import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm:FormGroup=new FormGroup({
     name:new FormControl(null ,[Validators.required ,Validators.minLength(3),Validators.maxLength(15)]),
     email:new FormControl(null ,[Validators.required,Validators.email]),
     password:new FormControl(null ,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
     rePassword:new FormControl(null ,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
     phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}/)]),
  })

  handelRegister(registerForm:FormGroup)
  {
    alert("DONE")
    console.log(registerForm)
  }
}
