/// <reference path="../typings/app.d.ts" />

/*
 * Angular
 */
import {provide, Component, bootstrap, View} from "angular2/angular2";
import {
  APP_BASE_HREF,
  ROUTER_PROVIDERS,
  ROUTER_PRIMARY_COMPONENT,
  HashLocationStrategy, // <-- added
  LocationStrategy,     // <-- added
  Router,
  RouterOutlet,
  RouteConfig,
  RouterLink
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
  directives: [RouterOutlet, RouterLink],
  template: `
  <div>
    <div>
      <p>Navigation:</p>
      <ul>
        <li><a [router-link]="['/home']">Home</a></li>
        <li><a [router-link]="['/about']">About</a></li>
        <li><a [router-link]="['/contact']">Contact us</a></li>
      </ul>
    </div>

    <router-outlet></router-outlet>
  </div>
  `
})
@RouteConfig([
  { path: "/", redirectTo: "/home" },
  { path: "/home",    as: "home",    component: HomeComponent },
  { path: "/about",   as: "about",   component: AboutComponent },
  { path: "/contact", as: "contact", component: ContactComponent }
])
class RoutesDemoApp {
  constructor(public router: Router) {
  }
}

bootstrap(RoutesDemoApp, [
  ROUTER_PROVIDERS,
  provide(ROUTER_PRIMARY_COMPONENT, {useValue: RoutesDemoApp}),
  provide(APP_BASE_HREF, {useValue: '/'}),
  provide(LocationStrategy, {useClass: HashLocationStrategy}) // <-- added
]);
