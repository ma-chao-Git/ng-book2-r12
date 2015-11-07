/// <reference path="../../typings/app.d.ts" />

/*
 * Angular
 */
import {Component, View} from "angular2/angular2";
import {
  Router,
  RouterOutlet,
  RouteConfig,
  RouterLink
} from "angular2/router";

/*
 * Components
 */
import {MainComponent} from "components/products/MainComponent";
import {InterestComponent} from "components/products/InterestComponent";
import {SportifyComponent} from "components/products/SportifyComponent";
import {ByIdComponent} from "components/products/ByIdComponent";

@Component({
  selector: "products"
})
@View({
  directives: [RouterOutlet, RouterLink],
  template: `
  <h2>Products</h2>

  <div class="navLinks">
    <a [router-link]="['./Main']">Main</a> |
    <a [router-link]="['./Interest']">Interest</a> |
    <a [router-link]="['./Sportify']">Sportify</a> |
    Enter id: <input #id size="6">
    <button (click)="goToProduct(id.value)">Go</button>
  </div>

  <div class="products-area">
    <router-outlet></router-outlet>
  </div>
  `
})
@RouteConfig([
  { path: "/",         redirectTo: "main" },
  { path: "/:id",      as: "ById",     component: ByIdComponent },
  { path: "/main",     as: "Main",     component: MainComponent },
  { path: "/interest", as: "Interest", component: InterestComponent },
  { path: "/sportify", as: "Sportify", component: SportifyComponent },
])
export class ProductsComponent {
  constructor(public router: Router) {
  }

  goToProduct(id:string) {
    this.router.navigate(['./ById', {id: id}]);
  }
}
