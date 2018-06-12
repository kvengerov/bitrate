import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {SearchService} from '../search/search.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  // results = [];
  // searchTerm$ = new Subject<string>();

  constructor(private searchService: SearchService) {  }

  ngOnInit() {
    // this.searchService.search(this.searchTerm$)
    //   .subscribe(results => {
    //     console.log(results.results);
    //     // this.results = results.results;
    //   });
  }

}
