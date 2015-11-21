/// <reference path="../node_modules/angular2/angular2.d.ts" />

import {
    Component,
    NgFor,
    View,
    bootstrap
} from "angular2/angular2";

@Component({
    selector: 'hello-world'
})
@View({
    directives: [NgFor],
    template: `
        <div>Hello {{ name }}!</div>
        <ul>
            <li *ng-for="#name of names">Hello {{ name }}</li>
        </ul>

    `
})
class HelloWorld {
    name: string;
    names: Array<string>;

    constructor() {
        this.name = 'Guenther';
        this.names = ['Ari', 'Carlos', 'Felipe', 'Nate'];
    }
}

bootstrap(HelloWorld);