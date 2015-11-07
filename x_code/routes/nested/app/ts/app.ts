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
import {ProductsComponent} from "components/ProductsComponent";

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
  <div class="page-header">
    <div class="container">
      <h1>Router Sample</h1>
      <div class="navLinks">
        <a [router-link]="['/Home']">Home</a>
        <a [router-link]="['/Products']">Products</a>
      </div>
    </div>
  </div>

  <div id="content">
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  </div>
  `
})
@RouteConfig([
  { path: "/", redirectTo: "/home" },
  { path: "/home",         as: "Home",     component: HomeComponent },
  { path: "/products/...", as: "Products", component: ProductsComponent },
])
class RoutesDemoApp {
  constructor(public router: Router) {
  }
}

bootstrap(RoutesDemoApp, [
  ROUTER_BINDINGS,
  bind(ROUTER_PRIMARY_COMPONENT).toValue(RoutesDemoApp),
  bind(APP_BASE_HREF).toValue('/'),
  bind(LocationStrategy).toClass(HashLocationStrategy)
]);
