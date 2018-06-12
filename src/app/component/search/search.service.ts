import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class SearchService {

  baseUrl = 'https://api.cdnjs.com/libraries';
  queryUrl = '?search=';
  private rootUrl = 'http://ws.audioscrobbler.com/2.0/';

  constructor(private httpClient: HttpClient) {}

  search(tracks: Observable<string>) {
    return tracks.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(track => this.trackSearch(track));
  }

  trackSearch(track) {
    return this.httpClient.get(`${this.rootUrl}?method=track.search&track=${track}&format=json`,
      {
        observe: 'body',
        responseType: 'json'
      }
    );
  }


  searchEntries(term) {
    return this.httpClient
      .get(this.baseUrl + this.queryUrl + term,
        {
          observe: 'body',
          responseType: 'json'
        }
      );
  }

}
