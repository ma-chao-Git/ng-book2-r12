var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var router_1 = require("angular2/router");
var HomeComponent_1 = require("components/HomeComponent");
var AboutComponent_1 = require("components/AboutComponent");
var ContactComponent_1 = require("components/ContactComponent");
require("css/styles.scss");
var RoutesDemoApp = (function () {
    function RoutesDemoApp(router) {
        this.router = router;
    }
    RoutesDemoApp = __decorate([
        angular2_1.Component({
            selector: "router-app"
        }),
        angular2_1.View({
            directives: [router_1.ROUTER_DIRECTIVES],
            template: "\n  <div>\n    <nav>\n      <a>Navigation:</a>\n      <ul>\n        <li><a [router-link]=\"['/Home']\">Home</a></li>\n        <li><a [router-link]=\"['/About']\">About</a></li>\n        <li><a [router-link]=\"['/Contact']\">Contact us</a></li>\n      </ul>\n    </nav>\n\n    <router-outlet></router-outlet>\n  </div>\n  "
        }),
        router_1.RouteConfig([
            { path: "/", redirectTo: "/home" },
            { path: "/home", as: "Home", component: HomeComponent_1.HomeComponent },
            { path: "/about", as: "About", component: AboutComponent_1.AboutComponent },
            { path: "/contact", as: "Contact", component: ContactComponent_1.ContactComponent }
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], RoutesDemoApp);
    return RoutesDemoApp;
})();
angular2_1.bootstrap(RoutesDemoApp, [
    router_1.ROUTER_BINDINGS,
    angular2_1.bind(router_1.ROUTER_PRIMARY_COMPONENT).toValue(RoutesDemoApp),
    angular2_1.bind(router_1.APP_BASE_HREF).toValue('/')
]);
