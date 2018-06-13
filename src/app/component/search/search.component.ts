import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {SearchService} from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  results = [];
  searchTerm$ = new Subject<string>();
  track = '';

  constructor(private searchService: SearchService) {  }

  ngOnInit() {  }

  searchTrack(trk: string) {
    console.log(this.track);
    this.searchService.trackSearch(this.track)
      .subscribe((results: any) => {
        this.results = results.results;
      });
  }
}
