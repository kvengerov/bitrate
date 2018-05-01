import { Component, OnInit, Input } from '@angular/core';
import { LastfmService } from '../../service/lastfm.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {
  topTracks:any = [];

  @Input() track;

  constructor(private _lastfmService: LastfmService) { }

  ngOnInit() {
    this._lastfmService.getTopTracks().subscribe(tracks => {
      console.log(tracks.tracks.track);
      this.topTracks = tracks.tracks.track;
    })
  }

}
