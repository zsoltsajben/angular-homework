import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private matDialogRef: MatDialogRef<LoginComponent>,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  login() {
    if (this.authService.login(this.username, this.password)) {
      this.matDialogRef.close();
    } else {
      alert('Wrong username or password!');
    }
  }
}
