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

  constructor(private httpClient: HttpClient) {}

  getTopTracks()  {
    return this.httpClient.get(`${this.rootUrl}?method=tag.gettoptracks&tag=disco&limit=5&format=json`,
      {
      observe: 'body',
      responseType: 'json'
      }
    )
      // .map(res => JSON.stringify(res));
  }


  getTopArtists() {
    return this.httpClient.get(`${this.rootUrl}?method=tag.gettopartists&tag=disco&limit=10&format=json`)
      .map(res => JSON.stringify(res));
  }

}
