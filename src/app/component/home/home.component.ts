import { Component, OnInit } from '@angular/core';
import {LastfmService} from '../../service/lastfm.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tracks = [];
  artists = [];
  artistsO = [];

  constructor(private lastfmService: LastfmService) { }

  ngOnInit() {

    this.lastfmService.getTopArtists().subscribe((artists: any) => {
      console.log(artists.artists.artist);
      this.artists = artists.artists.artist;
    });

    this.lastfmService.getTopTracks().subscribe((tracks: any) => {
      // console.log(tracks.tracks.track);
      this.tracks = tracks.tracks.track;
    });

    this.lastfmService.getTopArtistsOther().subscribe((artistsO: any) => {
      console.log(artistsO.artists.artist);
      this.artistsO = artistsO.artists.artist;
    });



  }

}
