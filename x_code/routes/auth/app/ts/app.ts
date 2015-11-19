/// <reference path="../typings/app.d.ts" />

/*
 * Angular
 */
import {provide, Component, bootstrap, View} from "angular2/angular2";
import {
  APP_BASE_HREF,
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  ROUTER_PRIMARY_COMPONENT,
  HashLocationStrategy,
  LocationStrategy,
  Router,
  RouteConfig,
  RouteParams,
} from "angular2/router";

/*
 * Components
 */
import {LoginComponent} from "components/LoginComponent";
import {HomeComponent} from "components/HomeComponent";
import {AboutComponent} from "components/AboutComponent";
import {ContactComponent} from "components/ContactComponent";
import {ProtectedComponent} from "components/ProtectedComponent";

/*
 * Services
 */
import {AUTH_PROVIDERS} from "services/AuthService";

/*
 * Webpack
 */
require("css/styles.scss");

@Component({
  selector: "router-app"
})
@View({
  directives: [ROUTER_DIRECTIVES, LoginComponent],
  template: `
  <div class="page-header">
    <div class="container">
      <h1>Router Sample</h1>
      <div class="navLinks">
        <a [router-link]="['/Home']">Home</a>
        <a [router-link]="['/About']">About</a>
        <a [router-link]="['/Contact']">Contact us</a>
        <a [router-link]="['/Protected']">Protected</a>
      </div>
    </div>
  </div>

  <div id="content">
    <div class="container">

      <login></login>

      <hr>

      <router-outlet></router-outlet>
    </div>
  </div>
  `
})
@RouteConfig([
  { path: "/", redirectTo: "/home" },
  { path: "/home",      as: "Home",      component: HomeComponent },
  { path: "/about",     as: "About",     component: AboutComponent },
  { path: "/contact",   as: "Contact",   component: ContactComponent },
  { path: "/protected", as: "Protected", component: ProtectedComponent },
])
class RoutesDemoApp {
  constructor(public router: Router) {
  }
}

bootstrap(RoutesDemoApp, [
  ROUTER_PROVIDERS,
  AUTH_PROVIDERS,
  provide(ROUTER_PRIMARY_COMPONENT, {useValue: RoutesDemoApp}),
  provide(APP_BASE_HREF, {useValue: '/'}),
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
