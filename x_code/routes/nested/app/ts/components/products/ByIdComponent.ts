/// <reference path="../../../typings/app.d.ts" />

/*
 * Angular
 */
import {Component, View} from "angular2/angular2";
import {RouteParams} from "angular2/router";

@Component({
  selector: "byid"
})
@View({
  template: `You selected product: {{ id }}`
})
export class ByIdComponent {
  id: string;

  constructor(public routeParams: RouteParams) {
    this.id = routeParams.get("id");
  }
}
