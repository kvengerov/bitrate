import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LastfmService {
  private api_key = '6d030655f435a44c22e119deeb2554d9';
  private rootUrl = 'http://ws.audioscrobbler.com/2.0/';

  constructor(private http: HttpClient) {}

  getTopTracks() {
    return this.http.get(`${this.rootUrl}?method=tag.gettoptracks&tag=disco&limit=50&api_key=${this.api_key}&format=json`)
      .map(res => JSON.stringify(res));
  }

  getTopArtists() {
    return this.http.get(`${this.rootUrl}?method=tag.gettopartists&tag=disco&limit=10&api_key=${this.api_key}&format=json`)
      .map(res => JSON.stringify(res));
  }

}
