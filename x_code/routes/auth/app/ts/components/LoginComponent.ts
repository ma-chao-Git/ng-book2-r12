/// <reference path="../../typings/app.d.ts" />

/*
 * Angular
 */
import {Component, View, NgIf} from "angular2/angular2";

/*
 * Services
 */
import {AuthService} from "services/AuthService";

@Component({
  selector: "login"
})
@View({
  directives: [NgIf],
  template: `
  <div class="alert alert-danger" role="alert" *ng-if="message">
    {{ message }}
  </div>

  <form class="form-inline" *ng-if="!authService.getUser()">
    <div class="form-group">
      <label for="username">User:</label>
      <input class="form-control" name="username" #username>
    </div>

    <div class="form-group">
      <label for="password">Password:</label>
      <input class="form-control" type="password" name="password" #password>
    </div>

    <a class="btn btn-default" (click)="login(username.value, password.value)">
      Submit
    </a>
  </form>

  <div class="well" *ng-if="authService.getUser()">
    Logged in as <b>{{ authService.getUser() }}</b>
    <a href (click)="logout()">Log out</b>
  </div>
  `
})
export class LoginComponent {
  message: string;

  constructor(public authService: AuthService) {
    this.message = "";
  }

  login(username: string, password: string): boolean {
    this.message = "";
    if (!this.authService.login(username, password)) {
      this.message = "Incorrect credentials.";
      setTimeout(function() {
        this.message = "";
      }.bind(this), 2500);
    }
    return false;
  }

  logout(): boolean {
    this.authService.logout();
    return false;
  }
}
