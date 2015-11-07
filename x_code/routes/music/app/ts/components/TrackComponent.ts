/// <reference path="../../typings/app.d.ts" />

/*
 * Angular
 */
import {Component, View, OnInit, ElementRef, NgIf} from "angular2/angular2";
import {Response} from "angular2/http";
import {RouteParams, RouterLink, LocationStrategy} from "angular2/router";

/*
 * Services
 */
import {SpotifyService} from "services/SpotifyService";

@Component({
  selector: "track"
})
@View({
  directives: [RouterLink, NgIf],
  template: `
  <div *ng-if="track">
    <p>
      <h1>{{ track.name }}</h1>
    </p>

    <p>
      <img src="{{ track.album.images[1].url }}">
    </p>

    <p>
      <audio controls src="{{ track.preview_url }}"></audio>
    </p>

    <p><a href (click)="back()">Back</a></p>
  </div>
  `
})
export class TrackComponent {
  id: string
  track: Object;

  constructor(public routeParams: RouteParams, public spotify: SpotifyService,
              public locationStrategy: LocationStrategy) {
    this.id = routeParams.get("id");
  }

  onInit(): void {
    this.spotify.getTrack(this.id).then(this.renderTrack.bind(this));
  }

  back(): void {
    this.locationStrategy.back();
  }

  renderTrack(res: Response): void {
    this.track = res.json();
    console.log('track', this.track);
  }
}
