import {Component, Input, OnInit} from '@angular/core';
import {LastfmService} from '../../../service/lastfm.service';

@Component({
  selector: 'app-popular-list',
  templateUrl: './popular-list.component.html',
  styleUrls: ['./popular-list.component.scss']
})
export class PopularListComponent implements OnInit {

  tracks = [];

  constructor(private _lastfmService: LastfmService) { }

  ngOnInit() {
    this._lastfmService.getTopTracks().subscribe(tracks => {
      console.log(tracks.tracks.track);
      this.tracks = tracks.tracks.track;
    });
  }

}
