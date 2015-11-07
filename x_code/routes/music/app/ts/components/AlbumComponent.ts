/// <reference path="../../typings/app.d.ts" />

/*
 * Angular
 */
import {Component, View, OnInit, NgIf, NgFor} from "angular2/angular2";
import {Response} from "angular2/http";
import {RouteParams, RouterLink, LocationStrategy} from "angular2/router";

 /*
  * Services
  */
import {SpotifyService} from "services/SpotifyService";

@Component({
  selector: "album"
})
@View({
  directives: [RouterLink, NgIf, NgFor],
  template: `
  <div *ng-if="album">
    <p>
      <h1>{{ album.name }}</h1>
      <h2>{{ album.artists[0].name }}</h2>
    </p>

    <p>
      <img src="{{ album.images[1].url }}">
    </p>

    <p>
      <h3>Tracks</h3>
      <ol>
        <li *ng-for="#t of album.tracks.items">
          <a [router-link]="['/tracks', {id: t.id}]">
            {{ t.name }}
          </a>
        </li>
      </ol>
    </p>

    <p><a href (click)="back()">Back</a></p>
  </div>
  `
})
export class AlbumComponent implements OnInit {
  id: string;
  album: Object;

  constructor(public routeParams: RouteParams, public spotify: SpotifyService,
              public locationStrategy: LocationStrategy) {
    this.id = routeParams.get("id");
  }

  onInit(): void {
    this.spotify.getAlbum(this.id).then(this.renderAlbum.bind(this));
  }

  back(): void {
    this.locationStrategy.back();
  }

  renderAlbum(res: Response): void {
    this.album = res.json();
    console.log("album", this.album);
  }
}
