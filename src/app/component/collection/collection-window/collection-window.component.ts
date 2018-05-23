import { LastfmService } from './../../../service/lastfm.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-window',
  templateUrl: './collection-window.component.html',
  styleUrls: ['./collection-window.component.scss']
})
export class CollectionWindowComponent implements OnInit {

  tracks = [];

  constructor(private _lastfmService: LastfmService) { }

  ngOnInit() {
    this._lastfmService.getTopTracks().subscribe((tracks: any) => {
      console.log(tracks.tracks.track);
      this.tracks = tracks.tracks.track;
    });
  }

}
