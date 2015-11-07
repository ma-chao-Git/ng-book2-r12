/// <reference path="../typings/app.d.ts" />

/*
 * Angular
 */
import {
  Component,
  View,
  NgIf,
  bind,
  bootstrap
} from "angular2/angular2";
import {HTTP_BINDINGS} from "angular2/http";
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
import {SearchComponent} from "components/SearchComponent";
import {ArtistComponent} from "components/ArtistComponent";
import {TrackComponent} from "components/TrackComponent";
import {AlbumComponent} from "components/AlbumComponent";

/*
 * Services
 */
import {SPOTIFY_BINDINGS} from "services/SpotifyService";

/*
 * Webpack
 */
require("css/styles.scss");

@Component({
  selector: "router-app"
})
@View({
  directives: [ROUTER_DIRECTIVES, NgIf],
  template: `
  <router-outlet></router-outlet>
  `
})
@RouteConfig([
  { path: "/", redirectTo: "/search" },
  { path: "/search", as: "Search", component: SearchComponent },
  { path: "/artists/:id", as: "Artists", component: ArtistComponent },
  { path: "/tracks/:id", as: "Tracks", component: TrackComponent },
  { path: "/albums/:id", as: "Albums", component: AlbumComponent },
])
class RoutesDemoApp {
  query: string;

  constructor(public router: Router) {
  }
}

bootstrap(RoutesDemoApp, [
  ROUTER_BINDINGS,
  HTTP_BINDINGS,
  SPOTIFY_BINDINGS,
  bind(ROUTER_PRIMARY_COMPONENT).toValue(RoutesDemoApp),
  bind(APP_BASE_HREF).toValue('/'),
  bind(LocationStrategy).toClass(HashLocationStrategy)
]);
