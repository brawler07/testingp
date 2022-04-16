import { Component, OnInit} from '@angular/core';
import { FormControl,FormControlName , NgForm ,Validators} from '@angular/forms';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // firstname:string='';
  // terms:boolean=false;

  // signupForm!:FormGroup;
  username=new FormControl('',[Validators.required,Validators.minLength(5)]);
  constructor() {
    // this.username.statusChanges.subscribe(ValidorInvalid =>
    //   {
    //     console.log(ValidorInvalid)
    //   })
    this.username.valueChanges.subscribe(data=>
    {
      console.log(data);
    });
   }
  
  ngOnInit(): void {
    // this.signupForm=new FormGroup({
    //   'username':new FormControl('',[Validators.required,Validators.minLength(5)]),
      // 'contact':new FormControl('',[Validators.required,Validators.minLength(10)]),
      // 'email':new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      // 'password':new FormControl('',[Validators.required,Validators.minLength(8)]),
      // 'cnfpass':new FormControl('',[Validators.required,Validators.minLength(8)])

    }
    onsubmit(){
      console.log('error',this.username.errors);
    }
  }
  // signup(taking:NgForm){
  //    console.log(taking.value);
  // }

//   get username()
//   {
//     return this.signupForm?.get('username');
//   }
//   get contact()
//   {
//     return this.signupForm?.get('contact');
//   }
//   get email()
// {
//   return this.signupForm?.get('email');
// }
// get password()
// {
//   return this.signupForm?.get('password');
// }
// get cnfpass()
// {
//   return this.signupForm?.get('cnfpass');
// }
 
// gotosi(): void {
//    this.router.navigate(['home'])
// }



