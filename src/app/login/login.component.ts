import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',  //The template of the component is located at ./login.component.html
  styleUrls: ['./login.component.css']
})
//constructor creates a new form group with two fields: username and password.
export class LoginComponent {
  username!: string ;
  password!: string ;
  loginForm: FormGroup; //login form is assigned to from group

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]+$/)]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]+$/)])
    });
  }
/*On submit, if the loginForm is valid,
 it will check for a successful authentication by calling the AuthService's login method
  with the username and password of the user that submitted their credential*/
  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      if (this.authService.login(username, password)) {
        alert('Login successful!');
        this.router.navigate(['/todo-list']);
      } else {
        alert('Invalid username or password.');
      }
    }
  }
}
