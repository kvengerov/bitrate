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
    return this.httpClient.get(`${this.rootUrl}?method=chart.gettoptracks&tag=disco&limit=15&format=json`,
      {
      observe: 'body',
      responseType: 'json'
      }
    );
  }
  getTopArtists()  {
    return this.httpClient.get(`${this.rootUrl}?method=chart.gettopartists&limit=2&format=json`,
      {
        observe: 'body',
        responseType: 'json'
      }
    );
  }
  getTopArtistsOther()  {
    return this.httpClient.get(`${this.rootUrl}?method=chart.gettopartists&limit=4&format=json`,
      {
        observe: 'body',
        responseType: 'json'
      }
    );
  }
  trackSearch() {
    return this.httpClient.get(`${this.rootUrl}?method=track.search&track=Believe&format=json`,
      {
        observe: 'body',
        responseType: 'json'
      }
    );
  }
  albumSearch() {
    return this.httpClient.get(`${this.rootUrl}?method=album.search&album=Believe&format=json`,
      {
        observe: 'body',
        responseType: 'json'
      }
    );
  }
  artistSearch() {
    return this.httpClient.get(`${this.rootUrl}?method=artist.search&artist=Believe&format=json`,
      {
        observe: 'body',
        responseType: 'json'
      }
    );
  }


}
