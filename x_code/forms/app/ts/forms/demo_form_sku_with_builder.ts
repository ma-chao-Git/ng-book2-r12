/// <reference path="../../typings/app.d.ts" />
import {Component, bootstrap, View} from "angular2/angular2";
import {FORM_DIRECTIVES, FormBuilder, ControlGroup} from "angular2/angular2";

@Component({
  selector: 'demo-form-sku-builder'

})
@View({
  directives: [FORM_DIRECTIVES],
  template: `
  <div>
    <h2>Demo Form: Sku with Builder</h2>
    <form [ng-form-model]="myForm" 
          (submit)="onSubmit(myForm.value)">

      <div class="form-group">
        <label for="skuInput">SKU</label>
        <input type="text" 
               class="form-control" 
               id="skuInput" 
               placeholder="SKU"
               [ng-form-control]="myForm.controls['sku']">
      </div>

      <button type="submit" class="btn btn-default">Submit</button>
    </form>
  </div>
  `
})
export class DemoFormSkuBuilder {
  myForm: ControlGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      "sku": ["ABC123"]
    });
  }

  onSubmit(value) {
    console.log('you submitted value: ', value);
  }
}
