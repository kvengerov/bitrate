import { Component, OnInit } from '@angular/core';
import { LastfmService } from '../../service/lastfm.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss'],
  providers: [LastfmService]
})
export class PopularComponent implements OnInit {
  topArtists:any = [];

  constructor(private lastfmService: LastfmService) { }

  ngOnInit() {
    this.lastfmService.getTopArtists().subscribe(topArtists => {
      console.log(topArtists);
      // this.topArtists = this.topArtists;
      this.topArtists = topArtists;
    })
  }

}
