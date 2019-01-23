import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../models/iuser.model';

const USERS_KEY = 'users';
const CURRENT_USER_NAME_KEY = 'currentUsername';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: BehaviorSubject<boolean>;
  private currentUser: BehaviorSubject<IUser>;

  constructor() {
    const currentUsername = localStorage.getItem(CURRENT_USER_NAME_KEY);
    const isLoggedIn = !!currentUsername;
    this.isLoggedIn = new BehaviorSubject<boolean>(isLoggedIn);
    this.currentUser = new BehaviorSubject<IUser>(
      isLoggedIn ? { username: currentUsername } : null);
  }

  get IsLoggedIn$(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }

  get CurrentUser$(): Observable<IUser> {
    return this.currentUser.asObservable();
  }

  login(username: string, password: string): boolean {
    const storedUsers = this.getStoredUsers();
    const currentUserFromStore = storedUsers.find(u => u.username === username);

    // wrong password
    if (currentUserFromStore && currentUserFromStore.password !== password) {
      return false;
    }

    // not in the store yet
    if (!currentUserFromStore) {
      this.saveUser({ username: username, password: password });
    }

    // login
    this.logUserIn(username);
    return true;
  }

  logout() {
    this.isLoggedIn.next(false);
    this.currentUser.next(null);
    localStorage.removeItem(CURRENT_USER_NAME_KEY);
  }

  private logUserIn(username: string) {
    this.isLoggedIn.next(true);
    this.currentUser.next({ username: username });
    localStorage.setItem(CURRENT_USER_NAME_KEY, username);
  }

  private getStoredUsers(): User[] {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  }

  private saveUser(user: User) {
    const users = this.getStoredUsers();
    users.push(user);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }
}

interface User {
  username: string;
  password: string;
}
