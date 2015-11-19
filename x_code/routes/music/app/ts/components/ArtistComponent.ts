/// <reference path="../../typings/app.d.ts" />

/*
 * Angular
 */
import {Component, View, OnInit, NgIf} from "angular2/angular2";
import {Response} from "angular2/http";
import {RouteParams, RouterLink, LocationStrategy} from "angular2/router";

/*
 * Services
 */
import {SpotifyService} from "services/SpotifyService";

@Component({
  selector: "artist"
})
@View({
  directives: [RouterLink, NgIf],
  template: `
  <div *ng-if="artist">
    <p>
      <h1>{{ artist.name }}</h1>
    </p>

    <p>
      <img src="{{ artist.images[0].url }}">
    </p>

    <p><a href (click)="back()">Back</a></p>
  </div>
  `
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Object;

  constructor(public routeParams: RouteParams, public spotify: SpotifyService,
              public locationStrategy: LocationStrategy) {
    this.id = routeParams.get("id");
  }

  onInit(): void {
    this.spotify.getArtist(this.id).then(this.renderArtist.bind(this));
  }

  back(): void {
    this.locationStrategy.back();
  }

  renderArtist(res: Response): void {
    this.artist = res.json();
  }
}
