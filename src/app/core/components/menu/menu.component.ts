import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../models/iuser.model';
import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  currentUser$: Observable<IUser>;

  constructor(
    private authService: AuthService,
    private matDialog: MatDialog
  ) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.IsLoggedIn$;
    this.currentUser$ = this.authService.CurrentUser$;
  }

  openLogin() {
    this.matDialog.open(LoginComponent);
  }

  logout() {
    this.authService.logout();
  }
}
