/// <reference path="../typings/app.d.ts" />

/*
 * Angular
 */
import {bind, Component, bootstrap, View} from "angular2/angular2";
import {
  APP_BASE_HREF,
  ROUTER_DIRECTIVES,
  ROUTER_BINDINGS,
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
import {HomeComponent} from "components/HomeComponent";
import {AboutComponent} from "components/AboutComponent";
import {ContactComponent} from "components/ContactComponent";

/*
 * Webpack
 */
require("css/styles.scss");

@Component({
  selector: "router-app"
})
@View({
  directives: [ROUTER_DIRECTIVES],
  template: `
  <div>
    <nav>
      <a>Navigation:</a>
      <ul>
        <li><a [router-link]="['/Home']">Home</a></li>
        <li><a [router-link]="['/About']">About</a></li>
        <li><a [router-link]="['/Contact']">Contact us</a></li>
      </ul>
    </nav>

    <router-outlet></router-outlet>
  </div>
  `
})
@RouteConfig([
  { path: "/", redirectTo: "/home" },
  { path: "/home",    as: "Home",    component: HomeComponent },
  { path: "/about",   as: "About",   component: AboutComponent },
  { path: "/contact", as: "Contact", component: ContactComponent }
])
class RoutesDemoApp {
  constructor(public router: Router) {
  }
}

bootstrap(RoutesDemoApp, [
  ROUTER_BINDINGS,
  bind(ROUTER_PRIMARY_COMPONENT).toValue(RoutesDemoApp),
  bind(APP_BASE_HREF).toValue('/')
]);
