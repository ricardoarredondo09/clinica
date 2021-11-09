import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user ={
    name: '',
    email: '',
    password: ''
  }

  constructor(private authService:AuthService ) { }

  ngOnInit(): void {
  }
  
  signUp(){
    this.authService.signUp(this.user).subscribe(
      res=> {
        console.log(res),
        localStorage.setItem('token', res.access_token)
      },err=>{
        console.log(err)
      }
    )
  }

}
