/// <reference path="../../typings/app.d.ts" />

import {Injectable, provide} from "angular2/angular2";
import {Http, Response} from "angular2/http";

import {Promise} from "angular2/src/core/facade/async";

/**
 * SpotifyService works querying the Spotify Web API
 * https://developer.spotify.com/web-api/
 */

@Injectable()
export class SpotifyService {
  static BASE_URL: string = "https://api.spotify.com/v1";

  constructor(public http: Http) {
  }

  query(URL: string, params?: Array<string>): Promise<Response> {
    let queryURL: string = `${SpotifyService.BASE_URL}${URL}`;
    if (params) {
      queryURL = `${queryURL}?${params.join("&")}`;
    }

    return this.http.get(queryURL).toPromise();
  }

  search(query: string, type: string): Promise<Response> {
    return this.query(`/search`, [
      `q=${query}`,
      `type=${type}`
    ]);
  }

  searchTrack(query: string): Promise<Response> {
    return this.search(query, "track");
  }

  getTrack(id: string): Promise<Response> {
    return this.query(`/tracks/${id}`);
  }

  getArtist(id: string): Promise<Response> {
    return this.query(`/artists/${id}`);
  }

  getAlbum(id: string): Promise<Response> {
    return this.query(`/albums/${id}`);
  }
}

export var SPOTIFY_PROVIDERS: Array<any> = [
  provide(SpotifyService, {useClass: SpotifyService})
];
