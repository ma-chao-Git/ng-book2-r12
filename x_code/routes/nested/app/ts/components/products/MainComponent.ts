/// <reference path="../../../typings/app.d.ts" />

/*
 * Angular
 */
import {Component, View} from "angular2/angular2";
import {RouteParams} from "angular2/router";

@Component({
  selector: "main"
})
@View({
  template: `Welcome to the products section. Please select a product above.`
})
export class MainComponent {
}
