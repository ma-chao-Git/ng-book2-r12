/// <reference path="../../typings/app.d.ts" />

/*
 * Angular
 */
import {Component, View, Injector} from "angular2/angular2";
import {CanActivate} from "angular2/router";

/*
 * Services
 */
import {AuthService} from "services/AuthService";

@Component({
  selector: "protected"
})
@View({
  template: `<h1>Protected content</h1>`
})
@CanActivate(
  (nextInstr, currInstr) => {
    let injector = Injector.resolveAndCreate([AuthService]);
    let authService: AuthService = injector.get(AuthService);
    return authService.isLogged();
  }
)
export class ProtectedComponent {
}
