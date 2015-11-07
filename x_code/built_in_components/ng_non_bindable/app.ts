/// <reference path="typings/angular2/angular2.d.ts" />

import {
  Component,
  View,

  bootstrap,
} from "angular2/angular2";

@Component({
  selector: 'ng-non-bindable-sample-app'
})
@View({

  template: `
  <div>
    {{ content }}
    <span ng-non-bindable>
      <- This is what {{ content }} rendered
    </span>
  </div>
  `
})
class NgNonBindableSampleApp {
  content: string;

  constructor() {
    this.content = 'Some text';
  }
}

bootstrap(NgNonBindableSampleApp);
