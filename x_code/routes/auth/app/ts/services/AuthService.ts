/// <reference path="../../typings/app.d.ts" />

import {Injectable, bind} from "angular2/angular2";

@Injectable()
export class AuthService {
  login(user: string, password: string): boolean {
    if (user === "user" && password === "password") {
      localStorage.setItem("username", user);
      return true;
    }

    return false;
  }

  logout() {
    localStorage.removeItem("username");
  }

  getUser() {
    return localStorage.getItem("username");
  }

  isLogged() {
    return this.getUser() !== null;
  }
}

export var AUTH_BINDINGS: Array<any> = [
  bind(AuthService).toClass(AuthService)
];
