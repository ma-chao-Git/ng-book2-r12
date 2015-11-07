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
var LoginComponent_1 = require("components/LoginComponent");
var HomeComponent_1 = require("components/HomeComponent");
var AboutComponent_1 = require("components/AboutComponent");
var ContactComponent_1 = require("components/ContactComponent");
var ProtectedComponent_1 = require("components/ProtectedComponent");
var AuthService_1 = require("services/AuthService");
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
            directives: [router_1.ROUTER_DIRECTIVES, LoginComponent_1.LoginComponent],
            template: "\n  <div class=\"page-header\">\n    <div class=\"container\">\n      <h1>Router Sample</h1>\n      <div class=\"navLinks\">\n        <a [router-link]=\"['/Home']\">Home</a>\n        <a [router-link]=\"['/About']\">About</a>\n        <a [router-link]=\"['/Contact']\">Contact us</a>\n        <a [router-link]=\"['/Protected']\">Protected</a>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"content\">\n    <div class=\"container\">\n\n      <login></login>\n\n      <hr>\n\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n  "
        }),
        router_1.RouteConfig([
            { path: "/", redirectTo: "/home" },
            { path: "/home", as: "Home", component: HomeComponent_1.HomeComponent },
            { path: "/about", as: "About", component: AboutComponent_1.AboutComponent },
            { path: "/contact", as: "Contact", component: ContactComponent_1.ContactComponent },
            { path: "/protected", as: "Protected", component: ProtectedComponent_1.ProtectedComponent },
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], RoutesDemoApp);
    return RoutesDemoApp;
})();
angular2_1.bootstrap(RoutesDemoApp, [
    router_1.ROUTER_BINDINGS,
    AuthService_1.AUTH_BINDINGS,
    angular2_1.bind(router_1.ROUTER_PRIMARY_COMPONENT).toValue(RoutesDemoApp),
    angular2_1.bind(router_1.APP_BASE_HREF).toValue('/'),
    angular2_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)
]);
