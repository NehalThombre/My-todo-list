import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn: boolean = false;

  constructor() { }

  login(username: string, password: string): boolean {
    if (username === 'Nehal' && password === 'Nehal12345') {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  /*the code above contains an isAuthenticated() method
  which returns true if the user's session has been authenticated
  or false otherwise.*/

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

}
