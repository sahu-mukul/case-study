import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string | undefined;
  password!: string;
  invalidmessage!:string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  LoginUser()
  {
    if(this.username == "Admin" && this.password == "password")
    {
      this.router.navigateByUrl("/home");
    }
    else
    {
      this.invalidmessage="wrong credentials";
    }
  }

}
