import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

export interface Track {
  name: string;
  id: number;
}

@Injectable()
export class LastfmService {
  private rootUrl = 'http://ws.audioscrobbler.com/2.0/';

  constructor(private _httpClient: HttpClient) {}

  getTopTracks()  {
    return this._httpClient.get(`${this.rootUrl}?method=chart.gettoptracks&tag=disco&limit=20&format=json`,
      {
      observe: 'body',
      responseType: 'json'
      }
    );
      // .map(res => JSON.stringify(res));
  }


  getTopArtists() {
    return this._httpClient.get(`${this.rootUrl}?method=tag.gettopartists&tag=disco&limit=10&format=json`)
      .map(res => JSON.stringify(res));
  }

}
