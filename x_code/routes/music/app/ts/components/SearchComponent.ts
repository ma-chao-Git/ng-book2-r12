/// <reference path="../../typings/app.d.ts" />

/*
 * Angular
 */
import {Component, View, OnInit, NgFor, NgIf} from "angular2/angular2";
import {Response} from "angular2/http";
import {
  Router,
  RouterOutlet,
  RouteConfig,
  RouterLink,
  RouteParams,
} from "angular2/router";

/*
 * Services
 */
import {SpotifyService} from "services/SpotifyService";

@Component({
  selector: "search"
})
@View({
  directives: [NgIf, NgFor, RouterLink],
  template: `
  <p>
    <h1>Search</h1>
  </p>

  <p>
    <input type="text" [value]="query" #newquery (keydown.enter)="submit(newquery.value)">
    <button (click)="submit(newquery.value)">Search</button>
  </p>

  <p>
    <div *ng-if="results">
      <h1>Results</h1>

      <div class="row">
        <div class="col-sm-6 col-md-4" *ng-for="#t of results.tracks.items">
          <div class="thumbnail">
            <div class="content">
              <img src="{{ t.album.images[0].url }}" class="img-responsive">
              <div class="caption">
                <h3>
                  <a [router-link]="['/Artists', {id: t.artists[0].id}]">
                    {{ t.artists[0].name }}
                  </a>
                </h3>
                <br>
                <p>
                  <a [router-link]="['/Tracks', {id: t.id}]">
                    {{ t.name }}
                  </a>
                </p>
              </div>
              <div class="attribution">
                <h4>
                  <a [router-link]="['/Albums', {id: t.album.id}]">
                    {{ t.album.name }}
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </p>
  `
})
export class SearchComponent implements OnInit {
  query: string;
  results: Object;

  constructor(public spotify: SpotifyService, public router: Router,
              public routeParams: RouteParams) {
  }

  onInit(): void {
    this.search();
  }

  submit(query): void {
    this.router.navigate(['/Search', {query: query}]);
    this.search();
  }

  search() {
    this.query = this.routeParams.get('query');
    if (!this.query) {
      return;
    }
    this.spotify.searchTrack(this.query).then(this.saveResults.bind(this));
  }

  saveResults(res: Response) {
    this.results = res.json();
  }
}
