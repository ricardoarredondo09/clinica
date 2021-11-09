import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user ={
    name: '',
    email: '',
    password: ''
  }
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  signIn(){
    this.authService.signIn(this.user).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.access_token);
        this.router.navigate(['/pacientes'])
      },
      err => console.log(err)
    )
  }

}
