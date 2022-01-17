import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

 
  users!: User[];
  userForm: boolean | undefined;
  isNewUser: boolean | undefined;
  newUser: any = {};
  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    this.userForm = true;
    this.isNewUser = true;
  }
  saveUser(user: User) {
    if (this.isNewUser) {
      // add a new user
      this.userService.addUser(user);
    }
    this.userForm = false;
    this.router.navigateByUrl("/employee");
  }
  cancelNewUser() {
    this.newUser = {};
    this.userForm = false;
    this.router.navigateByUrl("/employee");
  }

}
