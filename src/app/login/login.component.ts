import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;

  constructor(private user:UserService,private router:Router){}

  ngOnInit(): void {

    this.loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',Validators.required),
  });
}

getErrorMessageEmail() {
  if (this.loginForm.controls["email"].hasError('required')) {
    return 'You must enter a value';
  }

  return this.loginForm.controls["email"] ? 'Not a valid email' : '';
}


loginSubmit(){
  // this.loginForm.markAllAsTouched();
  if(this.loginForm.valid){
    this.user.userLogin = true;
    this.router.navigate(["/jokes"]);

  }
}

}
