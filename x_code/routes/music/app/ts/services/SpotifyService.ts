/// <reference path="../../typings/app.d.ts" />

import {Injectable, bind} from "angular2/angular2";
import {Http} from "angular2/http";

/**
 * SpotifyService works querying the Spotify Web API
 * https://developer.spotify.com/web-api/
 */

let BASE_URL: string = "https://api.spotify.com/v1";

@Injectable()
export class SpotifyService {
  constructor(public http: Http) {
  }

  query(URL: string, params?: Array<string>) {
    let queryURL: string = `${BASE_URL}${URL}`;
    if (params) {
      queryURL = `${queryURL}?${params.join("&")}`;
    }

    return this.http.get(queryURL).toPromise();
  }

  search(query: string, type: string) {
    return this.query(`/search`, [
      `q=${query}`,
      `type=${type}`
    ]);
  }

  searchTrack(query: string) {
    return this.search(query, "track");
  }

  getTrack(id: string) {
    return this.query(`/tracks/${id}`);
  }

  getArtist(id: string) {
    return this.query(`/artists/${id}`);
  }

  getAlbum(id: string) {
    return this.query(`/albums/${id}`);
  }
}

export var SPOTIFY_BINDINGS: Array<any> = [
  bind(SpotifyService).toClass(SpotifyService)
];
